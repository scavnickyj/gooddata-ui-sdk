// (C) 2024 GoodData Corporation

import { IAnalyticalBackend } from "@gooddata/sdk-backend-spi";
import { MeasureGroupIdentifier, newTwoDimensional } from "@gooddata/sdk-model";
import { Buckets } from "./types.js";

export const getExecutionResult = async (
    backend: IAnalyticalBackend,
    workspace: string,
    buckets: Buckets,
) => {
    const { rowAttributes, visualizationAttribute, chartMeasures, standaloneMeasures = [] } = buckets;

    try {
        const execution = await backend
            .workspace(workspace)
            .execution()
            .forItems([...rowAttributes, visualizationAttribute, ...chartMeasures, ...standaloneMeasures])
            .withDimensions(
                ...newTwoDimensional([...rowAttributes, MeasureGroupIdentifier], [visualizationAttribute]),
            )
            .execute();

        return await execution.readAll();
    } catch (e: any) {
        throw new Error("Unable to get execution result", e);
    }
};
