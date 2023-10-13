// (C) 2021-2022 GoodData Corporation
import { useMemo } from "react";
import { AttributeFiltersOrPlaceholders, useResolveValueWithPlaceholders } from "@gooddata/sdk-ui";
import { filterIsEmpty, IAttributeFilter, ObjRef } from "@gooddata/sdk-model";
import { IElementsQueryAttributeFilter } from "@gooddata/sdk-backend-spi";
import isFunction from "lodash/isFunction.js";
import { ParentFilterOverAttributeType } from "../types.js";

/**
 * @internal
 */
export const useResolveParentFiltersInput = (
    parentFilters?: AttributeFiltersOrPlaceholders,
    overAttribute?: ParentFilterOverAttributeType,
    allowEmptyParentFilter?: boolean,
) => {
    const resolvedParentFilters = useResolveValueWithPlaceholders(parentFilters);

    return useMemo(() => {
        return getParentFiltersWithOverAttribute(
            resolvedParentFilters,
            overAttribute,
            allowEmptyParentFilter,
        );
    }, [resolvedParentFilters, overAttribute, allowEmptyParentFilter]);
};

const getParentFiltersWithOverAttribute = (
    parentFilters: IAttributeFilter[],
    overAttribute: ObjRef | ((parentFilter: IAttributeFilter, index: number) => ObjRef),
    allowEmptyParentFilter = false,
): IElementsQueryAttributeFilter[] => {
    if (!parentFilters || !overAttribute) {
        return [];
    }

    const overAttributeGetter = isFunction(overAttribute) ? overAttribute : () => overAttribute;

    const mappedParentFilters = parentFilters.map((attributeFilter, index) => ({
        attributeFilter,
        overAttribute: overAttributeGetter(attributeFilter, index),
    }));

    if (!allowEmptyParentFilter) {
        return mappedParentFilters.filter((item) => !filterIsEmpty(item.attributeFilter));
    }

    return mappedParentFilters;
};
