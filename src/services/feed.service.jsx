const makeFeedService = ({ request }) => ({
  getFeed: async (url) => {
    try {
      const data = await request.get(url, true);
      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makeFeedService;
