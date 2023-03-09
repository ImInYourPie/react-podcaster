const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    try {
      const data = await request.get(corsHandler(url), true);

      return data.text();
    } catch (err) {
      console.log(err);
      throw err;
    }
  },
});

export default makeFeedService;
