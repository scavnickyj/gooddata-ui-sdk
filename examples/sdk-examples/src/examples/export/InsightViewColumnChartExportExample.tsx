// (C) 2007-2019 GoodData Corporation
import React from "react";

import { InsightView } from "@gooddata/sdk-ui-ext";
import { newAbsoluteDateFilter } from "@gooddata/sdk-model";
import { ExampleWithExport } from "./ExampleWithExport";

import { pieInsightViewIdentifier, dateDatasetIdentifier, workspace } from "../../constants/fixtures";
import { useBackend } from "../../context/auth";

const filters = [newAbsoluteDateFilter(dateDatasetIdentifier, "2017-01-01", "2017-12-31")];

const style = { height: 300 };
// TODO: SDK8 Decide whether add dimesion prop to InsightView
// const insightViewProps = {
//     custom: {
//         drillableItems: [],
//     },
//     dimensions: {
//         height: 300,
//     },
// };

export const insightViewColumnChartExportExample = () => {
    const backend = useBackend();
    return (
        <ExampleWithExport>
            {onExportReady => (
                <div style={style} className="s-insightView-chart">
                    <InsightView
                        backend={backend}
                        workspace={workspace}
                        insight={pieInsightViewIdentifier}
                        filters={filters}
                        onExportReady={onExportReady}
                    />
                </div>
            )}
        </ExampleWithExport>
    );
};

export default insightViewColumnChartExportExample;