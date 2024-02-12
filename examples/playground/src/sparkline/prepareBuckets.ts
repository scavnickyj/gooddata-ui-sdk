// (C) 2024 GoodData Corporation

import { InlineMeasureBuilder, measureIdentifier, objRefToString } from "@gooddata/sdk-model";
import { Buckets } from "./types.js";

export const prepareBuckets = (buckets: Buckets) => {
    const { rowAttributes, standaloneMeasures } = buckets;
    const mainRowAttribute = rowAttributes[0];
    const mainRowAttributeId = objRefToString(mainRowAttribute.attribute.displayForm);

    const customizedStandaloneMeasures = standaloneMeasures?.map((measure) => {
        const measureId = measureIdentifier(measure)!;
        return new InlineMeasureBuilder(
            `SELECT {metric/${measureId}} BY ALL OTHER EXCEPT {label/${mainRowAttributeId}}`,
        ).build();
    });

    return { ...buckets, standaloneMeasures: customizedStandaloneMeasures };
};
