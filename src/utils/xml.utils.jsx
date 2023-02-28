const makeXMLUtils = ({ parser }) => ({
  parse: async (xml) => {
    const parsedXml = await parser.parse(xml);
    return parsedXml;
  },
});

export default makeXMLUtils;
