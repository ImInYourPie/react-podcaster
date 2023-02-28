import makeXMLUtils from "../xml.utils";

describe("makeXMLUtils", () => {
  const parserMock = {
    parse: jest.fn(),
  };

  beforeEach(() => {
    parserMock.parse.mockClear();
  });

  const xmlUtils = makeXMLUtils({ parser: parserMock });

  describe("parse", () => {
    it("should call parser.parse with the given XML", async () => {
      const xml = "<example><item>1</item><item>2</item></example>";
      await xmlUtils.parse(xml);
      expect(parserMock.parse).toHaveBeenCalledWith(xml);
    });

    it("should return the parsed XML", async () => {
      const xml = "<example><item>1</item><item>2</item></example>";
      const parsedXml = { example: { item: ["1", "2"] } };
      parserMock.parse.mockResolvedValueOnce(parsedXml);
      const result = await xmlUtils.parse(xml);
      expect(result).toEqual(parsedXml);
    });

    it("should reject with an error if parser.parse throws an error", async () => {
      const xml = "<example><item>1</item><item>2</item></example>";
      const parseError = new Error("Failed to parse XML");
      parserMock.parse.mockRejectedValueOnce(parseError);
      await expect(xmlUtils.parse(xml)).rejects.toThrow(parseError);
    });

    it("should handle XML containing a single top-level tag", async () => {
      const xml = "<example>1</example>";
      const parsedXml = { example: "1" };
      parserMock.parse.mockResolvedValueOnce(parsedXml);
      const result = await xmlUtils.parse(xml);
      expect(result).toEqual(parsedXml);
    });

    it("should handle XML containing CDATA sections", async () => {
      const xml = "<example><![CDATA[<p>Hello world</p>]]></example>";
      const parsedXml = { example: "<p>Hello world</p>" };
      parserMock.parse.mockResolvedValueOnce(parsedXml);
      const result = await xmlUtils.parse(xml);
      expect(result).toEqual(parsedXml);
    });
  });
});
