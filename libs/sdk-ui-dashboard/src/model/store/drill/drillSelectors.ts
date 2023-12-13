// (C) 2021-2023 GoodData Corporation
import { createSelector } from "@reduxjs/toolkit";
import { ExplicitDrill } from "@gooddata/sdk-ui";
import { DashboardSelector, DashboardState } from "../types.js";
import { ICrossFilteringItem } from "./types.js";
import { ObjRef, areObjRefsEqual, isAttributeElementsByRef } from "@gooddata/sdk-model";
import { createMemoizedSelector } from "../_infra/selectors.js";
import { selectFilterContextAttributeFilters } from "../index.js";
import compact from "lodash/compact.js";

const selectSelf = createSelector(
    (state: DashboardState) => state,
    (state) => state.drill,
);

/**
 * Returns drillable items that are currently set.
 *
 * @alpha
 */
export const selectDrillableItems: DashboardSelector<ExplicitDrill[]> = createSelector(
    selectSelf,
    (state) => {
        return state.drillableItems;
    },
);

/**
 * @beta
 */
export const selectCrossFilteringItems: DashboardSelector<ICrossFilteringItem[]> = createSelector(
    selectSelf,
    (state) => state.crossFiltering,
);

/**
 * @beta
 */
export const selectCrossFilteringFiltersLocalIdentifiers: DashboardSelector<string[]> = createSelector(
    selectCrossFilteringItems,
    (items) => items.flatMap((item) => item.filterLocalIdentifiers),
);

/**
 * @beta
 */
export const selectCrossFilteringFiltersLocalIdentifiersByWidgetRef: (
    ref: ObjRef | undefined,
) => DashboardSelector<string[] | undefined> = createMemoizedSelector((ref: ObjRef | undefined) =>
    createSelector(
        selectCrossFilteringItems,
        (items) => items.find((item) => areObjRefsEqual(ref, item.widgetRef))?.filterLocalIdentifiers,
    ),
);

/**
 * @beta
 */
export const selectCrossFilteringSelectedPointsByWidgetRef: (
    ref: ObjRef | undefined,
) => DashboardSelector<(string | null)[]> = createMemoizedSelector((ref: ObjRef | undefined) =>
    createSelector(
        selectCrossFilteringFiltersLocalIdentifiersByWidgetRef(ref),
        selectFilterContextAttributeFilters,
        (crossFiltersLocalIdentifiers, filterContextAttributeFilters) => {
            const effectiveFilters = compact(
                crossFiltersLocalIdentifiers?.map((localIdentifier) => {
                    return filterContextAttributeFilters.find(
                        (filter) => filter.attributeFilter.localIdentifier === localIdentifier,
                    );
                }),
            );

            return effectiveFilters.flatMap((filter) => {
                return isAttributeElementsByRef(filter.attributeFilter.attributeElements)
                    ? filter.attributeFilter.attributeElements.uris
                    : filter.attributeFilter.attributeElements.values;
            });
        },
    ),
);
