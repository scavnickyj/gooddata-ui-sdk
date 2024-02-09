// (C) 2007-2024 GoodData Corporation
import once from "lodash/once.js";
import {
    bucketsFind,
    bucketTotals,
    DataValue,
    IAttributeDescriptor,
    IExecutionDefinition,
    isMeasureGroupDescriptor,
    ISortItem,
    ITotal,
    sanitizeBucketTotals,
} from "@gooddata/sdk-model";

import { BucketNames, DataViewFacade } from "@gooddata/sdk-ui";
import {
    ColumnWidthItem,
    isAttributeColumnWidthItem,
    isMeasureColumnWidthItem,
    isMixedValuesColumnWidthItem,
    isSliceMeasureColumnWidthItem,
} from "../columnWidths.js";
import { IDataView, IExecutionResult } from "@gooddata/sdk-backend-spi";

function getScrollbarWidthBody(): number {
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add inner div
    const inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode?.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

/**
 * Returns the current actual scrollbar width.
 * For performance reasons this is memoized as the value is highly unlikely to change
 */
export const getScrollbarWidth = once(getScrollbarWidthBody);

export async function sleep(delay: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

/**
 * Get only valid totals from an execution definition given a list of sort items
 * Use provided totals, if not given, use totals from ATTRIBUTE bucket
 *
 * @param definition - an execution definition to sanitize
 * @param sortItems - a specification of the sort, if not provided definition.sortBy will be used
 * @param totals - totals to be sanitized, if not provided ATTRIBUTE bucket totals will be used
 */
export function sanitizeDefTotals(
    definition: IExecutionDefinition,
    sortItems?: ISortItem[],
    totals?: ITotal[],
): ITotal[] {
    const { buckets, sortBy } = definition;
    const attributeBucket = bucketsFind(buckets, BucketNames.ATTRIBUTE);
    return attributeBucket
        ? sanitizeBucketTotals(attributeBucket, sortItems ?? sortBy, totals ?? bucketTotals(attributeBucket))
        : [];
}

/**
 * Get totals from an execution definition for COLUMNS bucket
 *
 * @param definition - an execution definition from which totals should be extracted
 */
export function getTotalsForColumnsBucket(definition: IExecutionDefinition): ITotal[] {
    const { buckets } = definition;
    const attributeBucket = bucketsFind(buckets, BucketNames.COLUMNS);
    return attributeBucket ? bucketTotals(attributeBucket) : [];
}

export const tableHasRowAttributes = (rowAttributes: IAttributeDescriptor[]): boolean =>
    rowAttributes.length > 0;

export const tableHasColumnAttributes = (columnAttributes: IAttributeDescriptor[]): boolean =>
    columnAttributes.length > 0;

export const isStrongColumnWidthItem = (item: ColumnWidthItem) => {
    const isAttributeOrMeasureColumnWidthItem =
        isAttributeColumnWidthItem(item) || isMeasureColumnWidthItem(item);
    const isTransposedMeasureColumnWidthItem =
        isSliceMeasureColumnWidthItem(item) || isMixedValuesColumnWidthItem(item);

    return isAttributeOrMeasureColumnWidthItem || isTransposedMeasureColumnWidthItem;
};

export const getDataViewSeriesDescriptors = (dv: DataViewFacade) =>
    dv
        .data()
        .series()
        .toArray()
        .map((series) => series.descriptor)
        .filter(
            (descriptor, index, self) =>
                self.findIndex((s) => s.measureDescriptor === descriptor.measureDescriptor) === index,
        );

export const transformDataView = (dataView: IDataView, result: IExecutionResult): IDataView => {
    // eslint-disable-next-line no-console
    console.log("original data view", dataView);
    const measureHeadersInfo =
        result.dimensions[1].headers.find(isMeasureGroupDescriptor)?.measureGroupHeader.items ?? [];
    const numberOfMeasures = measureHeadersInfo.length;

    const transformedData = dataView.data.map((row) => {
        return [...Array(numberOfMeasures)].map((_, i) => {
            return pickEveryNthElement(row as DataValue[], numberOfMeasures, i);
        });
    });

    const transformedDataView = {
        ...dataView,
        data: transformedData as any, // TODO: this is a type issue as we cannot use [][][]
        count: [dataView.count[0], transformedData[0].length],
    };

    // eslint-disable-next-line no-console
    console.log("transformed data view", transformedDataView);

    return transformedDataView;
};

function pickEveryNthElement<T>(arr: T[], n: number, offset: number = 0): T[] {
    return arr.filter((_, index) => (index - offset) % n === 0);
}
