const makeRequest = ({ fetch }) => ({
  get: async (url) => {
    console.log("🚀 ~ file: request.lib.jsx:3 ~ get: ~ url:", url);
    const response = await fetch(url);

    if (!response.ok) throw new Error("Error making request");

    const data = await response.json();
    return data;
  },
});

export default makeRequest;
