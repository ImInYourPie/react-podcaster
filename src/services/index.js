import makePodcastsService from "./podcasts.service";

// Deps
import { request } from "@libs";

export default {
  podcastsService: makePodcastsService({ request, corsHandler }),
};
