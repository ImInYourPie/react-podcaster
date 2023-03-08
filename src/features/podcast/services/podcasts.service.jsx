const makePodcastService = ({
  baseService,
  feedService,
  xmlUtils,
  dateUtils,
  encodeUtils,
}) => ({
  getPodcast: async function (podcastId) {
    const data = await baseService.getPodcast(podcastId);

    let feedData = await feedService.getFeed(data.results[0].feedUrl);

    if (this.isFeedBase64Encoded(feedData)) {
      feedData = this.decodeBase64Feed(feedData.split(",")[1]);
    }

    const parsedFeed = await xmlUtils.parse(feedData);

    const podcast = this.parsePodcast(
      data.results[0],
      parsedFeed?.rss?.channel?.description
    );
    const episodes = this.parseEpisodes(parsedFeed?.rss?.channel?.item);

    return { podcast, episodes, episodesCount: episodes.length };
  },
  parsePodcast: (podcast, feed) => ({
    id: podcast.collectionId,
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600,
    description: feed ?? "No description",
  }),
  parseEpisodes: (raw) => {
    return raw.map((episode, index) => ({
      id: (raw.length - index).toString(),
      title: episode?.title,
      description: episode["content:encoded"] || episode?.description,
      duration:
        typeof episode["itunes:duration"] === "number"
          ? dateUtils.secondsToHours(episode["itunes:duration"])
          : episode["itunes:duration"],
      date: dateUtils.toLocale(episode.pubDate),
      episodeUrl: episode?.enclosure?.attr_url,
      episodeType: episode?.enclosure?.attr_type,
    }));
  },
  isFeedBase64Encoded: (str) => {
    if (typeof str !== "string") {
      return false;
    }

    if (str.startsWith("data:")) {
      const parts = str.split(",");

      if (parts.length === 2) {
        return true;
      }
    }
    return false;
  },
  decodeBase64Feed: (encoded) => {
    const bytes = encodeUtils.base64.decode(encoded);
    const text = encodeUtils.utf8.decode(bytes);
    return text;
  },
});

export default makePodcastService;
