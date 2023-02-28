import makePodcastsService from "./podcasts.service";
import makeFeedService from "./feed.service";

// Deps
import { request } from "@libs";

const podcastsService = makePodcastsService({ request });
const feedService = makeFeedService({ request });

export { podcastsService, feedService };
