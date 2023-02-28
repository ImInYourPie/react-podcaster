import makePodcastService from "./podcasts.service";

// Base service
import { podcastsService as baseService, feedService } from "@services";

// Utils
import { xmlUtils } from "@utils";

const podcastService = makePodcastService({
  baseService,
  feedService,
  xmlUtils,
});

export { podcastService };
