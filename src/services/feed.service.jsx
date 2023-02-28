const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    try {
      const data = await request.get(corsHandler(encodeURIComponent(url)));

      return data.contents;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makeFeedService;
