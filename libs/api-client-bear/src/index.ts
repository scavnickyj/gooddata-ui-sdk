// (C) 2023 GoodData Corporation

import { isNode } from "browser-or-node";
import { getFactory as getFactoryBrowser } from "./gooddata-browser.js";
import { getFactory as getFactoryNode } from "./gooddata-node.js";

const getFactory = isNode ? getFactoryNode : getFactoryBrowser;

export * from "./api.js";
export { SDK } from "./gooddata.js";
export { getFactory };

export default getFactory();
