const makePodcastsService = ({ request, corsHandler }) => ({
  list: async (limit) => {
    try {
      const data = await request.get(
        `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
      );
      return data;
    } catch (error) {
      throw error;
    }
  },
  getPodcast: async (id) => {
    try {
      const data = await request.get(
        corsHandler(
          encodeURIComponent(
            `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=10`
          )
        )
      );

      return JSON.parse(data.contents);
    } catch (error) {
      throw error;
    }
  },
});

export default makePodcastsService;
