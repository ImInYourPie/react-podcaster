import makePodcastsService from "./podcasts.service";

// Base service
import { podcastsService as baseService } from "@services";

const podcastsService = makePodcastsService({ baseService });

export { podcastsService };
