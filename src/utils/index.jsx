import makeDateUtils from "./date.utils";
import makeXMLUtils from "./xml.utils";

// Deps
import { XMLParser } from "fast-xml-parser";

const dateUtils = makeDateUtils();
const xmlUtils = makeXMLUtils({
  parser: new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "attr_",
  }),
});

export { dateUtils, xmlUtils };
