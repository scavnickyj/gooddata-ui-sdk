// (C) 2019-2022 GoodData Corporation
import {
    IWorkspaceCatalog,
    IWorkspaceCatalogFactory,
    IWorkspaceCatalogFactoryOptions,
} from "@gooddata/sdk-backend-spi";
import {
    IdentifierRef,
    ObjRef,
    CatalogItemType,
    CatalogItem,
    ICatalogGroup,
    ICatalogFact,
    ICatalogMeasure,
    isCatalogAttribute,
    isCatalogFact,
    isCatalogMeasure,
    IGroupableCatalogItemBase,
    ICatalogAttributeHierarchy,
} from "@gooddata/sdk-model";
import { TigerAuthenticatedCallGuard } from "../../../types/index.js";
import { convertFact, convertMeasure } from "../../../convertors/fromBackend/CatalogConverter.js";
import { TigerWorkspaceCatalog } from "./catalog.js";
import { loadAttributesAndDateDatasets } from "./datasetLoader.js";
import flatten from "lodash/flatten.js";
import flatMap from "lodash/flatMap.js";
import uniqBy from "lodash/uniqBy.js";
import sortBy from "lodash/sortBy.js";
import { MetadataUtilities, ValidateRelationsHeader } from "@gooddata/api-client-tiger";
import { addRsqlFilterToParams, tagsToRsqlFilter } from "./rsqlFilter.js";
import { convertAttributeHierarchy } from "../../../convertors/fromBackend/HierarchyConverter.js";

export class TigerWorkspaceCatalogFactory implements IWorkspaceCatalogFactory {
    constructor(
        private readonly authCall: TigerAuthenticatedCallGuard,
        public readonly workspace: string,
        public readonly options: IWorkspaceCatalogFactoryOptions = {
            types: ["attribute", "measure", "fact", "dateDataset", "attributeHierarchy"],
            excludeTags: [],
            includeTags: [],
            loadGroups: true,
        },
    ) {}

    public withOptions = (options: Partial<IWorkspaceCatalogFactoryOptions>): IWorkspaceCatalogFactory => {
        const newOptions = {
            ...this.options,
            ...options,
        };
        return new TigerWorkspaceCatalogFactory(this.authCall, this.workspace, newOptions);
    };

    public forDataset = (dataset: ObjRef): IWorkspaceCatalogFactory => {
        return this.withOptions({
            dataset,
        });
    };

    public forTypes = (types: CatalogItemType[]): IWorkspaceCatalogFactory => {
        return this.withOptions({
            types,
        });
    };

    public includeTags = (tags: ObjRef[]): IWorkspaceCatalogFactory => {
        return this.withOptions({
            includeTags: tags,
        });
    };

    public excludeTags = (tags: ObjRef[]): IWorkspaceCatalogFactory => {
        return this.withOptions({
            excludeTags: tags,
        });
    };

    public withGroups(loadGroups: boolean): IWorkspaceCatalogFactory {
        return this.withOptions({
            loadGroups,
        });
    }

    public load = async (): Promise<IWorkspaceCatalog> => {
        const promises: Promise<CatalogItem[]>[] = [];

        if (this.options.types.includes("measure")) {
            promises.push(this.loadMeasures());
        }
        if (this.options.types.includes("fact")) {
            promises.push(this.loadFacts());
        }

        const includeAttributes = this.options.types.includes("attribute");
        const includeDateDatasets = this.options.types.includes("dateDataset");
        if (includeAttributes || includeDateDatasets) {
            promises.push(this.loadAttributesAndDates(includeAttributes, includeDateDatasets));
        }

        const includeAttributeHierarchies = this.options.types.includes("attributeHierarchy");
        if (includeAttributeHierarchies) {
            promises.push(this.loadAttributeHierarchies());
        }

        const loadersResults = await Promise.all(promises);

        const catalogItems: CatalogItem[] = sortBy(flatten<CatalogItem>(loadersResults), (item) =>
            this.getCatalogItemSortingKey(item)?.toUpperCase(),
        );

        const groups = this.extractGroups(catalogItems);
        console.log(
            "🚀 ~ file: factory.ts:105 ~ TigerWorkspaceCatalogFactory ~ load= ~ loadersResults:",
            loadersResults,
        );

        return new TigerWorkspaceCatalog(this.authCall, this.workspace, groups, catalogItems, this.options);
    };

    private getCatalogItemSortingKey = (item: CatalogItem) => {
        if (isCatalogAttribute(item)) {
            return item.attribute.title;
        }
        if (isCatalogFact(item)) {
            return item.fact.title;
        }
        if (isCatalogMeasure(item)) {
            return item.measure.title;
        }
        return undefined;
    };

    private loadAttributesAndDates = async (
        loadAttributes: boolean,
        loadDateDataSets: boolean,
    ): Promise<CatalogItem[]> => {
        const rsqlTagFilter = tagsToRsqlFilter(this.options);

        return this.authCall((client) =>
            loadAttributesAndDateDatasets(
                client,
                this.workspace,
                rsqlTagFilter,
                loadAttributes,
                loadDateDataSets,
            ),
        );
    };

    private loadMeasures = async (): Promise<ICatalogMeasure[]> => {
        const rsqlTagFilter = tagsToRsqlFilter(this.options);
        const params = addRsqlFilterToParams({ workspaceId: this.workspace }, rsqlTagFilter);

        const measures = await this.authCall((client) => {
            return MetadataUtilities.getAllPagesOf(client, client.entities.getAllEntitiesMetrics, params, {
                headers: ValidateRelationsHeader,
            })
                .then(MetadataUtilities.mergeEntitiesResults)
                .then(MetadataUtilities.filterValidEntities);
        });

        return measures.data.map((measure) => convertMeasure(measure, measures.included));
    };

    private loadFacts = async (): Promise<ICatalogFact[]> => {
        const rsqlTagFilter = tagsToRsqlFilter(this.options);
        const params = addRsqlFilterToParams({ workspaceId: this.workspace }, rsqlTagFilter);

        const facts = await this.authCall((client) => {
            return MetadataUtilities.getAllPagesOf(client, client.entities.getAllEntitiesFacts, params).then(
                MetadataUtilities.mergeEntitiesResults,
            );
        });

        return facts.data.map(convertFact);
    };

    private loadAttributeHierarchies = async (): Promise<ICatalogAttributeHierarchy[]> => {
        return Promise.resolve(hierarchiesOut).then((result) => result.data.map(convertAttributeHierarchy));
    };

    // Groups are collected from all catalog entities.
    // There is no separate endpoint for the tags anymore.
    private extractGroups(catalogItems: CatalogItem[]): ICatalogGroup[] {
        const groupableItems = catalogItems.filter(
            (item) => !["dateDataset", "attributeHierarchy"].includes(item.type), // TODO: other way to do this?
        );
        const allTags = flatMap(groupableItems, (item): ICatalogGroup[] => {
            return (item as IGroupableCatalogItemBase).groups.map((tag) => ({
                title: (tag as IdentifierRef).identifier,
                tag: tag,
            }));
        });
        return uniqBy(allTags, (tag) => tag.title);
    }
}

// TODO: remove dummy hierarchy data
export const hierarchiesOut = {
    data: [
        {
            id: "first",
            type: "attributeHierarchy",
            attributes: {
                title: "First attributeHierarchy",
                description: "first hierarchy",
                content: {
                    attributes: [
                        {
                            identifier: {
                                id: "f_owner.region_id",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "attr.f_owner.salesrep",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "attr.f_product.product",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "attr.f_stage.stagename",
                                type: "attribute",
                            },
                        },
                    ],
                },
                createdAt: "2023-08-24 08:15",
            },
            relationships: {
                attributes: {
                    data: [
                        {
                            id: "region",
                            type: "attribute",
                        },
                        {
                            id: "state",
                            type: "attribute",
                        },
                    ],
                },
            },
            links: {
                self: "http://localhost:3000/api/v1/entities/workspaces/demo/attributeHierarchies/second",
            },
            meta: {
                origin: {
                    originType: "NATIVE",
                    originId: "demo",
                },
            },
        },
        {
            id: "second",
            type: "attributeHierarchy",
            attributes: {
                title: "Second attributeHierarchy",
                description: "second hierarchy",
                content: {
                    attributes: [
                        {
                            identifier: {
                                id: "f_owner.region_id",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "f_owner.department_id",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "attr.f_owner.salesrep",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "attr.f_stage.stagename",
                                type: "attribute",
                            },
                        },
                        {
                            identifier: {
                                id: "attr.f_product.product",
                                type: "attribute",
                            },
                        },
                    ],
                },
                createdAt: "2023-08-24 08:15",
            },
            relationships: {
                attributes: {
                    data: [
                        {
                            id: "region",
                            type: "attribute",
                        },
                        {
                            id: "state",
                            type: "attribute",
                        },
                    ],
                },
            },
            links: {
                self: "http://localhost:3000/api/v1/entities/workspaces/demo/attributeHierarchies/second",
            },
            meta: {
                origin: {
                    originType: "NATIVE",
                    originId: "demo",
                },
            },
        },
    ],
    included: [
        {
            id: "state",
            type: "attribute",
            attributes: {
                title: "State",
                description: "State",
                tags: ["Customers"],
                sourceColumn: "state",
                sourceColumnDataType: "STRING",
            },
            links: {
                self: "http://localhost:3000/api/v1/entities/workspaces/demo/attributes/state",
            },
        },
        {
            id: "region",
            type: "attribute",
            attributes: {
                title: "Region",
                description: "Region",
                tags: ["Customers"],
                sourceColumn: "region",
                sourceColumnDataType: "STRING",
            },
            links: {
                self: "http://localhost:3000/api/v1/entities/workspaces/demo/attributes/region",
            },
        },
    ],
    links: {
        self: "http://localhost:3000/api/v1/entities/workspaces/demo/attributeHierarchies?include=attributes&page=0&size=20",
        next: "http://localhost:3000/api/v1/entities/workspaces/demo/attributeHierarchies?include=attributes&page=1&size=20",
    },
};
