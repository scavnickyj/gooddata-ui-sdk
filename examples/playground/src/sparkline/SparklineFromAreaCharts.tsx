// (C) 2024 GoodData Corporation

import React from "react";
import { AreaChart, IChartConfig } from "@gooddata/sdk-ui-charts";
import * as Md from "../md/full.js";

const attribute = Md.City.Name;
const measure1 = Md.Population.Avg;
const measure2 = Md.Density.Avg;

const measures1 = [measure1];
const measures2 = [measure2];
const viewBy = attribute;

const config: IChartConfig = {
    xaxis: { visible: false },
    yaxis: { visible: false },
    grid: { enabled: false },
};

const wrapperDivStyle: any = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
};

const innerDivStyle: any = {
    display: "flex",
    flexDirection: "row",
    height: "200px",
};

export const SparklineFromAreaCharts = () => {
    return (
        <>
            <div style={wrapperDivStyle}>
                <div style={innerDivStyle}>
                    <AreaChart measures={measures1} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures2} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures1} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures2} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures1} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures2} viewBy={viewBy} config={config} />
                </div>
                <div style={innerDivStyle}>
                    <AreaChart measures={measures2} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures1} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures2} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures1} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures2} viewBy={viewBy} config={config} />
                    <AreaChart measures={measures1} viewBy={viewBy} config={config} />
                </div>
            </div>
        </>
    );
};
