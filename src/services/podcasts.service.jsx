const URL = (limit = 100) =>
  `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`;

const makePodcastsService = ({ request }) => ({
  list: async (limit) => {
    try {
      const data = await request.get(URL(limit));
      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makePodcastsService;
