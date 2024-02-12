// (C) 2024 GoodData Corporation

import { IAttribute, IMeasure } from "@gooddata/sdk-model";

export interface Buckets {
    rowAttributes: IAttribute[];
    visualizationAttribute: IAttribute; // optional?
    chartMeasures: IMeasure[];
    standaloneMeasures?: IMeasure[];
}
