const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    try {
      const data = await request.get(url, true);

      return data.text();
    } catch (error) {
      throw error;
    }
  },
});

export default makeFeedService;
