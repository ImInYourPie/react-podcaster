const makeFeedService = ({ request, corsHandler }) => ({
  getFeed: async (url) => {
    const data = await request.get(corsHandler(encodeURIComponent(url)));

    console.log(
      "🚀 ~ file: feed.service.jsx:6 ~ getFeed: ~ data.status.http_code !== 200:",
      data
    );

    if (data.status.http_code !== 200) throw "Podcast not found";

    return data.contents;
  },
});

export default makeFeedService;
