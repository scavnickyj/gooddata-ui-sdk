// (C) 2007-2021 GoodData Corporation
import { IChartConfig } from "../../../interfaces/index.js";
import { HighchartsOptions, SeriesPieOptions } from "../../lib/index.js";
import { alignChart } from "../_chartCreators/helpers.js";
import { getPieResponsiveConfig } from "../_chartCreators/responsive.js";

export function getPieConfiguration(config: IChartConfig): HighchartsOptions {
    const crossFilteringClassNameObj = config.selectedPoints?.length
        ? { className: "cross-filtering-highlighting highcharts-series-hover" }
        : {};

    const pieConfiguration = {
        chart: {
            type: "pie",
            events: {
                load() {
                    const distance = -((this.series[0].points?.[0]?.shapeArgs?.r ?? 30) / 3);
                    const options: SeriesPieOptions = {
                        type: "pie",
                        dataLabels: {
                            distance,
                        },
                    };
                    this.series[0].update(options);
                    alignChart(this, config.chart?.verticalAlign);

                    console.log("[pie] on load event");
                    if (config.selectedPoints?.length) {
                        console.log("[pie] selecting points:", config.selectedPoints);
                        config.selectedPoints.forEach((selectedPoint) => {
                            this.series[0].points.forEach((point: any) => {
                                if (point.name === selectedPoint) {
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
            pie: {
                size: "100%",
                allowPointSelect: false,
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
            series: {
                ...crossFilteringClassNameObj,
            },
        },
        legend: {
            enabled: false,
        },
    };

    if (config?.enableCompactSize) {
        return {
            ...pieConfiguration,
            responsive: getPieResponsiveConfig(),
        };
    }

    return pieConfiguration;
}
