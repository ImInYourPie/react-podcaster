import makeRequest from "../request.lib";

const mockResponse = {
  ok: true,
  status: 200,
  message: "Success",
  json: function () {
    return { status: this.status, message: this.message };
  },
};

const mockData = mockResponse.json();

const mockFetch = jest.fn((url) => {
  return new Promise((resolve) => setTimeout(resolve(mockResponse), 1000));
});

const request = makeRequest({ fetch: mockFetch });

const stubUrl = "https://example.com/api";

describe("Libs: Request", () => {
  test("Calls fetch lib on get request, with url and abort signal as arguments", async () => {
    await request.get(stubUrl);

    const abortController = new AbortController();
    const signal = abortController.signal;

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(stubUrl, { signal });
  });

  test("Return value is an object", async () => {
    const data = await request.get(stubUrl);

    expect(data).toEqual(mockData);
  });

  test("Returns an object with status property", async () => {
    const data = await request.get(stubUrl);

    expect(data).toHaveProperty("status");
  });
});
