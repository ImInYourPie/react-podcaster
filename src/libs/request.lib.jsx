const makeRequest = ({ fetch }) => ({
  get: async (url, raw = false) => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const responsePromise = fetch(url, { signal });

    responsePromise.abort = () => {
      abortController.abort();
    };

    const response = await responsePromise;

    if (!response.ok) throw new Error("Error making request");

    if (raw) return response;

    const data = await response.json();
    return data;
  },
});

export default makeRequest;
