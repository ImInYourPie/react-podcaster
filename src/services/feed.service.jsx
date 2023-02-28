const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    try {
      const data = await request.get(corsHandler(encodeURIComponent(url)));
      console.log("🚀 ~ file: feed.service.jsx:5 ~ getFeed: ~ data:", data);

      return data.contents;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makeFeedService;
