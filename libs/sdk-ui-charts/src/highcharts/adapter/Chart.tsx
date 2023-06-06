// (C) 2007-2023 GoodData Corporation
import isEqual from "lodash/isEqual.js";
import noop from "lodash/noop.js";
import React from "react";
import { initChartPlugins } from "./chartPlugins.js";
import Highcharts, { HighchartsOptions } from "../lib/index.js";

import HighchartsMoreHC from "highcharts/highcharts-more.js";
import drillmoduleHC from "highcharts/modules/drilldown.js";
import treemapModuleHC from "highcharts/modules/treemap.js";
import bulletModuleHC from "highcharts/modules/bullet.js";
import funnelModuleHC from "highcharts/modules/funnel.js";
import heatmapHC from "highcharts/modules/heatmap.js";
import patternFillHC from "highcharts/modules/pattern-fill.js";
import sankeyModuleHC from "highcharts/modules/sankey.js";
import dependencyWheelModuleHC from "highcharts/modules/dependency-wheel.js";

export const drillmodule = drillmoduleHC as unknown as typeof drillmoduleHC.default;
export const treemapModule = treemapModuleHC as unknown as typeof treemapModuleHC.default;
export const bulletModule = bulletModuleHC as unknown as typeof bulletModuleHC.default;
export const funnelModule = funnelModuleHC as unknown as typeof funnelModuleHC.default;
export const sankeyModule = sankeyModuleHC as unknown as typeof sankeyModuleHC.default;
export const dependencyWheelModule =
    dependencyWheelModuleHC as unknown as typeof dependencyWheelModuleHC.default;
export const heatmap = heatmapHC as unknown as typeof heatmapHC.default;
export const HighchartsMore = HighchartsMoreHC as unknown as typeof HighchartsMoreHC.default;
export const patternFill = patternFillHC as unknown as typeof patternFillHC.default;

drillmodule(Highcharts);
treemapModule(Highcharts);
bulletModule(Highcharts);
funnelModule(Highcharts);
sankeyModule(Highcharts);
dependencyWheelModule(Highcharts);
heatmap(Highcharts);
HighchartsMore(Highcharts);
patternFill(Highcharts);
initChartPlugins(Highcharts);

/**
 * @internal
 */
export interface IChartProps {
    config: HighchartsOptions;
    domProps: any;
    callback(): void;
}

/**
 * @internal
 */
export class Chart extends React.Component<IChartProps> {
    public static defaultProps: Pick<IChartProps, "callback" | "domProps"> = {
        callback: noop,
        domProps: {},
    };

    private chart: Highcharts.Chart;
    private chartRef: HTMLElement;

    public componentDidMount(): void {
        this.createChart(this.props.config);
    }

    public shouldComponentUpdate(nextProps: IChartProps): boolean {
        return !isEqual(this.props.config, nextProps.config);
    }

    public componentDidUpdate(): void {
        this.createChart(this.props.config);
    }

    public componentWillUnmount(): void {
        this.chart.destroy();
    }

    public getHighchartRef(): HTMLElement {
        return this.chartRef;
    }

    public setChartRef = (ref: HTMLElement): void => {
        this.chartRef = ref;
    };

    public getChart(): Highcharts.Chart {
        if (!this.chart) {
            throw new Error("getChart() should not be called before the component is mounted");
        }

        return this.chart;
    }

    public createChart(config: HighchartsOptions): void {
        const chartConfig = config.chart;
        this.chart = new Highcharts.Chart(
            {
                ...config,
                chart: {
                    ...chartConfig,
                    renderTo: this.chartRef,
                },
            },
            this.props.callback,
        );
    }

    public render() {
        return <div {...this.props.domProps} ref={this.setChartRef} />;
    }
}
