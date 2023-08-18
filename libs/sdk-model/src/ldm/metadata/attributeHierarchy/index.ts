// (C) 2023 GoodData Corporation

import { IMetadataObjectBase, IMetadataObjectIdentity, ObjRef } from "../../../index.js";

/**
 * Attribute hierarchy metadata object
 *
 * @public
 */
export interface IAttributeHierarchyMetadataObject extends IMetadataObjectIdentity, IMetadataObjectBase {
    type: "attributeHierarchy";
    attributes: ObjRef[];
}
