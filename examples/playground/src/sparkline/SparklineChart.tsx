// (C) 2024 GoodData Corporation

import React from "react";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { DataValue } from "@gooddata/sdk-model";

interface ISparklineChart {
    data: DataValue[];
}

export const SparklineChart: React.FC<ISparklineChart> = ({ data }) => {
    const chartOptions: Highcharts.Options = {
        chart: {
            type: "line",
            width: 120,
            height: 50,
        },
        plotOptions: {
            line: {
                marker: { enabled: false },
            },
        },
        title: { text: undefined },
        xAxis: { visible: false },
        yAxis: { visible: false },
        legend: { enabled: false },
        tooltip: { enabled: false },
        credits: { enabled: false },
        series: [
            {
                data,
            },
        ] as any,
    };

    return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};
