import makePodcastService from "./podcasts.service";

// Base service
import { podcastsService as baseService } from "@services";

const podcastService = makePodcastService({ baseService });

export { podcastService };
