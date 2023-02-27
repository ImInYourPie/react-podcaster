const URL =
  "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json";

const makePodcastsService = ({ request }) => ({
  list: async (params, query) => {
    try {
      const data = await request.get(URL);

      const parsedPodcasts = data.feed.entry.map((podcast) => ({
        id: podcast.id.attributes["im:id"],
        name: podcast["im:name"].label,
        author: podcast["im:artist"].label,
        image: podcast["im:image"][2].label,
        url: podcast.link.attributes.href,
        description: podcast.summary,
      }));

      return parsedPodcasts;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makePodcastsService;
