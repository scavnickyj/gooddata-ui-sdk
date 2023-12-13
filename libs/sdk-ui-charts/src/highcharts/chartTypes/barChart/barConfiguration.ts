// (C) 2007-2022 GoodData Corporation
import cloneDeep from "lodash/cloneDeep.js";
import { HighchartsOptions } from "../../lib/index.js";
import { MAX_POINT_WIDTH } from "../_chartCreators/commonConfiguration.js";
import { IChartConfig } from "../../../interfaces/index.js";
import { getCommonResponsiveConfig } from "../_chartCreators/responsive.js";
import { getAxesCounts } from "../_util/common.js";

const BAR_TEMPLATE = {
    chart: {
        type: "bar",
    },
    plotOptions: {
        bar: {
            maxPointWidth: MAX_POINT_WIDTH,
            dataLabels: {
                enabled: true,
                padding: 2,
            },
        },
        series: {
            states: {
                hover: {
                    enabled: false,
                },
            },
        },
    },
    yAxis: [
        {
            stackLabels: {
                enabled: false,
            },
        },
    ],
};

export function getBarConfiguration(config: IChartConfig): HighchartsOptions {
    const clonedConfiguration = cloneDeep(BAR_TEMPLATE);
    const crossFilteringClassNameObj = config.selectedPoints?.length
        ? { className: "cross-filtering-highlighting highcharts-series-hover" }
        : {};

    const barConfiguration = {
        ...clonedConfiguration,
        chart: {
            ...clonedConfiguration.chart,
            events: {
                load() {
                    console.log("[bar] on load event");
                    if (config.selectedPoints?.length) {
                        console.log("[bar] selecting points:", config.selectedPoints, this.series);
                        config.selectedPoints.forEach((selectedPoint) => {
                            this.series[0].points.forEach((point: any) => {
                                if (point.category.name === selectedPoint) {
                                    point.update({ className: "highcharts-point-highlighted" });
                                }
                            });
                        });
                    }
                    console.log("_________________");
                },
            },
        },
        plotOptions: {
            ...clonedConfiguration.plotOptions,
            series: {
                ...clonedConfiguration.plotOptions?.series,
                ...crossFilteringClassNameObj,
            },
        },
    };

    if (config?.enableCompactSize && !config?.zoomInsight) {
        const reversed = true;
        const [xAxesCount, yAxesCount] = getAxesCounts(config);
        return {
            ...barConfiguration,
            responsive: getCommonResponsiveConfig(reversed, xAxesCount, yAxesCount),
        };
    }

    return barConfiguration;
}
