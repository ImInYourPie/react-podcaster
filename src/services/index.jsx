import makePodcastsService from "./podcasts.service";

// Deps
import { request } from "@libs";

const podcastsService = makePodcastsService({ request });

export { podcastsService };
