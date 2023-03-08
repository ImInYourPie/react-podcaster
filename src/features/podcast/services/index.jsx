import makePodcastService from "./podcasts.service";

// Base service
import { podcastsService as baseService, feedService } from "@services";

// Utils
import { xmlUtils, dateUtils } from "@utils";
import base64 from "base-64";
import utf8 from "utf8";

const encodeUtils = { base64, utf8 };

const podcastService = makePodcastService({
  baseService,
  feedService,
  xmlUtils,
  dateUtils,
  encodeUtils,
});

export { podcastService };
