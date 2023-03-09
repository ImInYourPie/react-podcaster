const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    const data = await request.get(corsHandler(encodeURIComponent(url)));

    if (data.status.http_code !== 200) throw "Podcast not found";

    return data.contents;
  },
});

export default makeFeedService;
