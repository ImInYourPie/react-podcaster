const makePodcastService = ({ baseService }) => ({
  getPodcast: async function (podcastId) {
    const data = await baseService.getPodcast(podcastId);
    const podcast = this.parsePodcast(data.results[0]);
    const episodes = this.parseEpisodes(data.results.slice(0));

    return { podcast, episodes, episodesCount: data.results[0].trackCount };
  },
  parsePodcast: (podcast) => ({
    id: podcast.collectionId,
    title: podcast.collectionName,
    author: podcast.artistName,
    image: podcast.artworkUrl600,
    description: podcast.feedUrl ?? "",
  }),

  parseEpisodes: (raw) =>
    raw.map((episode) => ({
      id: episode.trackId,
      title: episode.trackName,
      description: episode.description,
      episodeUrl: episode.episodeUrl,
      date: episode.releaseDate,
      contentType: episode.episodeContentType,
      fileExtension: episode.episodeFileExtension,
      duration: episode.trackTimeMillis,
    })),
});

export default makePodcastService;
