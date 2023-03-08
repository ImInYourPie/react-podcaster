const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    try {
      const data = await request.get(corsHandler(encodeURIComponent(url)));

      return data.contents;
    } catch (error) {
      throw error;
    }
  },
});

export default makeFeedService;
