import makeRequest from "./request.lib";

// Deps
import fetch from "cross-fetch";

const request = makeRequest({
  fetch,
});

export { request };
