import makePodcastsService from "./podcasts.service";
import makeFeedService from "./feed.service";

// Deps
import { request } from "@libs";

const corsHandler = (url) => {
  return `https://cors-anywhere.herokuapp.com/${url}`;
};

const podcastsService = makePodcastsService({ request, corsHandler });
const feedService = makeFeedService({ request, corsHandler });

export { podcastsService, feedService };
