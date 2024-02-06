// (C) 2024 GoodData Corporation

import { IDataView } from "@gooddata/sdk-backend-spi";
import {
    DataValue,
    ITotal,
    isAttributeDescriptor,
    isMeasureGroupDescriptor,
    resultHeaderName,
} from "@gooddata/sdk-model";

function pickEveryNthElement<T>(arr: T[], n: number, offset: number = 0): T[] {
    return arr.filter((_, index) => (index - offset) % n === 0);
}

function isMultidimensional(data: DataValue[] | DataValue[][]): data is DataValue[][] {
    return Array.isArray(data[0]);
}

export interface ISparklineData {
    data: (DataValue | DataValue[])[][];
    headers: (string | ITotal)[];
}

export const transformExecutionResult = (executionResult: IDataView): ISparklineData | undefined => {
    const {
        headerItems,
        totals = [],
        data,
        count,
        result: { dimensions },
    } = executionResult;
    // eslint-disable-next-line no-console
    // console.log("🚀 ~ transformExecutionResult ~ executionResult:", executionResult);

    // Data should always be multidimensional in this case
    if (!isMultidimensional(data)) {
        return undefined;
    }

    const totalNumberOfRows = count[0];
    const rowAttributes = headerItems[0];
    const rowAttributeHeadersInfo = dimensions[0].headers.filter(isAttributeDescriptor);
    const numberOfRowAttributes = rowAttributeHeadersInfo.length;
    const measureHeadersInfo =
        dimensions[1].headers.find(isMeasureGroupDescriptor)?.measureGroupHeader.items ?? [];
    const numberOfMeasures = measureHeadersInfo.length;
    const columnTotals = totals[1];
    const numberOfStandaloneMeasures = columnTotals[0].length;

    let shouldCollectHeaderInfo = true;
    const transformedHeaders: (string | ITotal)[] = [];
    const transformedData: (DataValue | DataValue[])[][] = [];
    for (let rowIndex = 0; rowIndex < totalNumberOfRows; rowIndex++) {
        const row: (DataValue | DataValue[])[] = [];

        // attribute values (main row attribute and its display forms)
        for (let attributeIndex = 0; attributeIndex < numberOfRowAttributes; attributeIndex++) {
            row.push(resultHeaderName(rowAttributes[attributeIndex][rowIndex]));

            // attribute header
            if (shouldCollectHeaderInfo) {
                transformedHeaders.push(rowAttributeHeadersInfo[attributeIndex].attributeHeader.name);
            }
        }

        // measure data (data for charts)
        for (let measureIndex = 0; measureIndex < numberOfMeasures; measureIndex++) {
            row.push(pickEveryNthElement(data[rowIndex], numberOfMeasures, measureIndex));

            // TODO: construct correct names for facts
            // measure headers
            if (shouldCollectHeaderInfo) {
                transformedHeaders.push(measureHeadersInfo[measureIndex].measureHeaderItem.name);
            }
        }

        // totals (standalone measures)
        for (let totalIndex = 0; totalIndex < numberOfStandaloneMeasures; totalIndex++) {
            row.push(columnTotals[rowIndex][totalIndex]);

            // TODO: construct correct names for totals
            // total headers (standalone measures)
            if (shouldCollectHeaderInfo) {
                executionResult.definition.dimensions[1].totals?.forEach((total) => {
                    transformedHeaders.push(`${total.type} of ${total.measureIdentifier}`);
                });
            }
        }

        shouldCollectHeaderInfo = false;
        transformedData.push(row);
    }

    return { data: transformedData, headers: transformedHeaders };
};
