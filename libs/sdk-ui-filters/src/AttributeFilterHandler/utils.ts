// (C) 2022-2023 GoodData Corporation

import isEmpty from "lodash/isEmpty.js";
import { IElementsQueryAttributeFilter } from "@gooddata/sdk-backend-spi";
import {
    attributeElementsIsEmpty,
    filterAttributeElements,
    isNegativeAttributeFilter,
} from "@gooddata/sdk-model";

/**
 * @internal
 */
export function isLimitingAttributeFiltersEmpty(
    limitingAttributeFilters: IElementsQueryAttributeFilter[],
    allowEmptyParentFilter = false,
) {
    const limitingFiltersExist = isEmpty(limitingAttributeFilters);

    if (allowEmptyParentFilter) {
        return limitingFiltersExist;
    }

    return (
        limitingFiltersExist ||
        limitingAttributeFilters.every((limitingAttributeFilter) =>
            isNegativeAttributeFilter(limitingAttributeFilter.attributeFilter)
                ? attributeElementsIsEmpty(filterAttributeElements(limitingAttributeFilter.attributeFilter))
                : false,
        )
    );
}
