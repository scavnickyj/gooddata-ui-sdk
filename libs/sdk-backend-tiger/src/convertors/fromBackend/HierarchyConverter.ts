// (C) 2023 GoodData Corporation

import { ICatalogAttributeHierarchy, ObjectType, idRef } from "@gooddata/sdk-model";

// TODO: copy json type here instead of any
export function convertAttributeHierarchy(hierarchyOut: any): ICatalogAttributeHierarchy {
    const { id, type, attributes, links } = hierarchyOut;

    return {
        type: "attributeHierarchy",
        attributeHierarchy: {
            type: "attributeHierarchy",
            id,
            uri: links.self,
            ref: idRef(id, type),
            title: attributes.title,
            description: attributes.description,
            attributes: attributes.content.attributes.map(
                (attribute: { identifier: { id: string; type: ObjectType } }) =>
                    idRef(attribute.identifier.id, attribute.identifier.type),
            ),
            production: true,
            deprecated: false,
            unlisted: false,
        },
    };
}
