import makeDateUtils from "./date.utils";
import makeXMLUtils from "./xml.utils";

// Deps
import { XMLParser } from "fast-xml-parser";

const dateUtils = makeDateUtils();
const feedUtils = makeXMLUtils({ parser: new XMLParser() });

export { dateUtils, feedUtils };
