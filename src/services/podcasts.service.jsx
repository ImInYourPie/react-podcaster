const makePodcastsService = ({ request, corsHandler }) => ({
  list: async (limit) => {
    const data = await request.get(
      `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
    );
    return data;
  },
  getPodcast: async (id) => {
    const data = await request.get(
      corsHandler(
        `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=10`
      )
    );

    return data;
  },
});

export default makePodcastsService;
