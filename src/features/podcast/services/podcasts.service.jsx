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

    const podcast = await this.parsePodcast(
      data.results[0],
      parsedFeed?.rss?.channel?.description
    );
    const episodes = this.parseEpisodes(data.results.slice(0));

    return { podcast, episodes, episodesCount: data.results[0].trackCount };
  },
  parsePodcast: (podcast, feed) => ({
    id: podcast.collectionId,
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600,
    description: feed ?? "No description",
  }),

  parseEpisodes: (raw) =>
    raw.map((episode) => ({
      id: episode.trackId,
      title: episode.trackName,
      description: episode.description,
      episodeUrl: episode.episodeUrl,
      date: dateUtils.toLocale(episode.releaseDate),
      contentType: episode.episodeContentType,
      fileExtension: episode.episodeFileExtension,
      duration: dateUtils.msToMinutes(episode.trackTimeMillis),
    })),
});

export default makePodcastService;
