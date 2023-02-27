const makeRequest = ({ fetch }) => ({
  get: async (url) => {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error making request");

    const data = await response.json();
    return data;
  },
});

export default makeRequest;
