// (C) 2024 GoodData Corporation

import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import {
    IAttribute,
    IMeasure,
    MeasureGroupIdentifier,
    newTotal,
    newTwoDimensional,
} from "@gooddata/sdk-model";

interface Buckets {
    rowAttribute: IAttribute;
    rowAttributeWithDifferentLabel: IAttribute;
    visualizationAttribute: IAttribute;
    measure1chart: IMeasure;
    measure2: IMeasure;
    measure3chart: IMeasure;
}

export const getExecutionResult = async (
    backend: IAnalyticalBackend,
    workspace: string,
    buckets: Buckets,
) => {
    const {
        rowAttribute,
        rowAttributeWithDifferentLabel,
        visualizationAttribute,
        measure1chart,
        measure2,
        measure3chart,
    } = buckets;

    const totalMeasure2 = newTotal("sum", measure2, visualizationAttribute);

    try {
        const execution = await backend
            .workspace(workspace)
            .execution()
            .forItems([
                rowAttribute,
                rowAttributeWithDifferentLabel,
                visualizationAttribute,
                measure1chart,
                measure2,
                measure3chart,
            ])
            .withDimensions(
                ...newTwoDimensional(
                    [rowAttribute, rowAttributeWithDifferentLabel],
                    // order matters here!
                    [visualizationAttribute, totalMeasure2, MeasureGroupIdentifier],
                ),
            )
            .execute();

        return await execution.readAll();
    } catch (e: any) {
        throw new Error("Unable to get execution result", e);
    }
};

/*
 * EXECUTION WHERE EVERYTHING IS IN ROWS AND NO COLUMNS ARE DEFINED
 */
// const execution = await backend
// .workspace(workspace)
// .execution()
// .forItems([
//     rowAttribute,
//     rowAttributeWithDifferentLabel,
//     visualizationAttribute,
//     measure1chart,
//     measure2,
//     measure3chart,
// ])
// .withDimensions(
//     ...newTwoDimensional(
//         [rowAttribute, rowAttributeWithDifferentLabel, visualizationAttribute, totalMeasure2],
//         [MeasureGroupIdentifier], // this ensures the dimension must contain all measures
//     ),
// )
// .execute();
