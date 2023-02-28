import makePodcastsService from "./podcasts.service";
import makeFeedService from "./feed.service";

// Deps
import { request } from "@libs";

const corsHandler = (url) => {
  return `https://api.allorigins.win/get?url=${url}`;
};

const podcastsService = makePodcastsService({ request, corsHandler });
const feedService = makeFeedService({ request, corsHandler });

export { podcastsService, feedService };
