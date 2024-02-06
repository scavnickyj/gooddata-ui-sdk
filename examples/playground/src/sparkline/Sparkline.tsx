// (C) 2024 GoodData Corporation

import { useBackend, useWorkspace } from "@gooddata/sdk-ui";
import React, { useEffect, useState } from "react";
import * as Md from "../md/full.js";
import { getExecutionResult } from "./getExecutionResult.js";
import { ISparklineData, transformExecutionResult } from "./transformExecutionResult.js";
import { DataValue, isTotal } from "@gooddata/sdk-model";
import { SparklineChart } from "./SparklineChart.js";
import "./Sparkline.scss";

const rowAttribute = Md.City.Name; // main attribute to define repeating rows
const rowAttributeWithDifferentLabel = Md.City.ShortName; // main attribute with different label
const visualizationAttribute = Md.DateDatasets.Activity.ActivityYear.Default; // second attribute that is used for slicing of all visualizations
const measure1chart = Md.NrOfActivities; // first measure - chart
const measure2 = Md.ActivityDate.Sum; // second measure - number ?
const measure3chart = Md.ActivityDate.Avg; // third measure - chart

export const Sparkline = () => {
    const backend = useBackend();
    const workspace = useWorkspace();
    const [data, setData] = useState<ISparklineData | undefined>(undefined);

    useEffect(() => {
        const getData = async () => {
            const executionResult = await getExecutionResult(backend!, workspace!, {
                rowAttribute,
                rowAttributeWithDifferentLabel,
                visualizationAttribute,
                measure1chart,
                measure2,
                measure3chart,
            });

            const transformedResult = transformExecutionResult(executionResult);

            if (transformedResult) {
                const { data, headers } = transformedResult;
                setData({ data, headers });
            }
        };

        getData();
    }, [backend, workspace]);

    useEffect(() => {
        // eslint-disable-next-line no-console
        // console.log(data);
    }, [data]);

    if (!data) {
        return <div>Loading...</div>;
    }

    const renderHeader = () => {
        return (
            <thead>
                <tr>
                    {data.headers.map((header, index: number) => {
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

    const renderRows = (rows: (DataValue | DataValue[])[]) => {
        return (
            <>
                {rows.map((row, index: number) => {
                    if (Array.isArray(row)) {
                        return (
                            <td key={index}>
                                <SparklineChart data={row} />
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
