const makePodcastService = ({
  baseService,
  feedService,
  xmlUtils,
  dateUtils,
}) => ({
  getPodcast: async function (podcastId) {
    const data = await baseService.getPodcast(podcastId);

    const feedData = await feedService.getFeed(data.results[0].feedUrl);

    const parsedFeed = await xmlUtils.parse(feedData);

    const podcast = this.parsePodcast(
      data.results[0],
      parsedFeed?.rss?.channel?.description
    );
    const episodes = this.parseEpisodes(parsedFeed?.rss?.channel?.item);

    return { podcast, episodes, episodesCount: data.results[0].trackCount };
  },
  parsePodcast: (podcast, feed) => ({
    id: podcast.collectionId,
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600,
    description: feed ?? "No description",
  }),
  parseEpisodes: (raw) => {
    console.log();
    return raw.map((episode) => ({
      id: episode?.guid["#text"] || episode?.guid,
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
});

export default makePodcastService;
