// (C) 2024 GoodData Corporation

import { useBackend, useWorkspace } from "@gooddata/sdk-ui";
import React, { useEffect, useState } from "react";
import * as Md from "../md/full.js";
import { getExecutionResult } from "./getExecutionResult.js";
import { ISparklineData, Row, transformExecutionResult } from "./transformExecutionResult.js";
import { isTotal } from "@gooddata/sdk-model";
import { SparklineChart } from "./SparklineChart.js";
import "./Sparkline.scss";
import { Buckets } from "./types.js";
import { prepareBuckets } from "./prepareBuckets.js";

const buckets: Buckets = {
    rowAttributes: [Md.City.Name, Md.City.ShortName],
    visualizationAttribute: Md.DateDatasets.Activity.ActivityYear.Default,
    chartMeasures: [Md.ActivityDate.Sum, Md.ActivityDate.Avg],
    standaloneMeasures: [Md.NrOfActivities],
};

export const Sparkline = () => {
    const backend = useBackend();
    const workspace = useWorkspace();
    const [data, setData] = useState<ISparklineData | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const preparedBuckets = prepareBuckets(buckets);
            // eslint-disable-next-line no-console
            console.log("🚀 ~ getData ~ preparedBuckets:", preparedBuckets);

            const executionResult = await getExecutionResult(backend!, workspace!, preparedBuckets);
            // eslint-disable-next-line no-console
            console.log("🚀 ~ getData ~ executionResult:", executionResult);

            const transformedResult = transformExecutionResult(executionResult, preparedBuckets);
            // eslint-disable-next-line no-console
            console.log("🚀 ~ getData ~ transformedResult:", transformedResult);

            if (transformedResult) {
                const { data, header, categories } = transformedResult;
                setData({ data, header, categories });
            }
        };

        getData();
    }, [backend, workspace]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const renderHeader = () => {
        return (
            <thead>
                <tr>
                    {data.header.map((header, index: number) => {
                        if (isTotal(header)) {
                            return <th key={index}>{header.type}</th>;
                        }

                        return <th key={index}>{header}</th>;
                    })}
                </tr>
            </thead>
        );
    };

    const renderBody = () => {
        return (
            <tbody>
                {data.data.map((row, index: number) => {
                    return <tr key={index}>{renderRows(row)}</tr>;
                })}
            </tbody>
        );
    };

    const renderRows = (rows: Row) => {
        return (
            <>
                {rows.map((row, index: number) => {
                    if (Array.isArray(row)) {
                        return (
                            <td key={index}>
                                <SparklineChart data={row} categories={data.categories} />
                            </td>
                        );
                    }

                    return <td key={index}>{row}</td>;
                })}
            </>
        );
    };

    return (
        <table>
            {renderHeader()}
            {renderBody()}
        </table>
    );
};
