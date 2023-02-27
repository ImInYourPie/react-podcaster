const makePodcastsService = ({ baseService }) => ({
  getTop100Podcasts: async function () {
    const data = await baseService.list(100);
    const parsedPodcasts = this.parsePodcasts(data.feed.entry);
    return parsedPodcasts;
  },
  parsePodcasts: (raw) =>
    raw.map((podcast) => ({
      id: podcast.id.attributes["im:id"],
      name: podcast["im:name"].label,
      author: podcast["im:artist"].label,
      image: podcast["im:image"][2].label,
      url: podcast.link.attributes.href,
      description: podcast.summary,
    })),
});

export default makePodcastsService;
