const URL = (limit = 100) =>
  `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`;

const makePodcastsService = ({ request }) => ({
  list: async (params, query) => {
    try {
      const data = await request.get(URL());
      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makePodcastsService;
