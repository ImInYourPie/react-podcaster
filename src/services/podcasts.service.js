const makePodcastsService = ({ request }) => ({
  list: async (url, params, query) => {
    try {
      const data = await request.get(url);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makePodcastsService;
