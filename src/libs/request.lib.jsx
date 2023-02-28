const makeRequest = ({ fetch }) => ({
  get: async (url, raw = false) => {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error making request");

    if (raw) return response;

    const data = await response.json();
    return data;
  },
});

export default makeRequest;
