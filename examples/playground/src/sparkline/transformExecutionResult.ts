// (C) 2024 GoodData Corporation

import { IDataView } from "@gooddata/sdk-backend-spi";
import {
    DataValue,
    isAttributeDescriptor,
    isMeasureGroupDescriptor,
    isResultAttributeHeader,
    resultHeaderName,
} from "@gooddata/sdk-model";
import { Buckets } from "./types.js";

function isMultidimensional(data: DataValue[] | DataValue[][]): data is DataValue[][] {
    return Array.isArray(data[0]);
}

export type Row = (DataValue | DataValue[])[];
type Data = Row[];

export interface ISparklineData {
    data: Data;
    header: string[];
    categories: (string | null)[];
}

export const transformExecutionResult = (
    executionResult: IDataView,
    buckets: Buckets,
): ISparklineData | undefined => {
    const {
        headerItems,
        data,
        count,
        definition: { measures },
        result: { dimensions },
    } = executionResult;
    const { rowAttributes, chartMeasures } = buckets;

    // Data should always be multidimensional in this case
    if (!isMultidimensional(data)) {
        return undefined;
    }

    const numberOfAttributes = rowAttributes.length;
    const numberOfMeasures = measures.length;
    const numberOfMeasuresForVisualisations = chartMeasures.length;
    const totalNumberOfTableRows = count[0] / numberOfMeasures;

    const rowAttributeItemHeaders = headerItems[0];
    const columnAttributeItemHeaders = headerItems[1];

    const attributeColumnHeaders = dimensions[0].headers.filter(isAttributeDescriptor);
    const measuresColumnHeaders =
        dimensions[0].headers.filter(isMeasureGroupDescriptor)[0].measureGroupHeader.items;
    const visualisationAttributeHeader = dimensions[1].headers.filter(isAttributeDescriptor)[0]; // there is always only one

    const transformedHeader: string[] = [];
    const transformedData: Data = [];

    // HEADER
    for (let attributeIndex = 0; attributeIndex < numberOfAttributes; attributeIndex++) {
        const attributeHeader = attributeColumnHeaders[attributeIndex];
        transformedHeader.push(attributeHeader.attributeHeader.name);
    }

    for (let measureIndex = 0; measureIndex < numberOfMeasures; measureIndex++) {
        const measureHeader = measuresColumnHeaders[measureIndex];
        transformedHeader.push(measureHeader.measureHeaderItem.name);
    }

    const visualisationAttributeHeaderName = visualisationAttributeHeader.attributeHeader.name;
    // eslint-disable-next-line no-console
    console.log("🚀 ~ visualisationAttributeHeaderName:", visualisationAttributeHeaderName);
    const visualisationLabels = columnAttributeItemHeaders[0]
        .filter(isResultAttributeHeader)
        .map((item) => item.attributeHeaderItem.name);

    // ROWS
    let offset = 0;
    for (let rowIndex = 0; rowIndex < totalNumberOfTableRows; rowIndex++) {
        const row: Row = [];

        for (let attributeIndex = 0; attributeIndex < numberOfAttributes; attributeIndex++) {
            row.push(resultHeaderName(rowAttributeItemHeaders[attributeIndex][offset]));
        }

        for (let measureIndex = 0; measureIndex < numberOfMeasures; measureIndex++) {
            const dataRow = data[offset + measureIndex];
            if (measureIndex < numberOfMeasuresForVisualisations) {
                row.push(dataRow);
            } else {
                row.push(dataRow[0]); // total row where all values are the same
            }
        }

        transformedData.push(row);
        offset = offset + numberOfMeasures;
    }

    return { data: transformedData, categories: visualisationLabels, header: transformedHeader };
};
