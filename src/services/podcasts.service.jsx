const makePodcastsService = ({ request, corsHandler }) => ({
  list: async (limit) => {
    try {
      const data = await request.get(
        `https://itunes.apple.com/us/rss/toppodcasts/limit=${limit}/genre=1310/json`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  getPodcast: async (id) => {
    try {
      const data = await request.get(
        `https://itunes.apple.com/lookup?id=${id}&entity=podcastEpisode&limit=1`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  },
});

export default makePodcastsService;
