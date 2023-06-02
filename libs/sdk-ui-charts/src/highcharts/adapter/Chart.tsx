// (C) 2007-2023 GoodData Corporation
import isEqual from "lodash/isEqual.js";
import noop from "lodash/noop.js";
import React from "react";
import { initChartPlugins } from "./chartPlugins.js";
import Highcharts, { HighchartsOptions } from "../lib/index.js";

import HighchartsMore from "highcharts/highcharts-more.js";
import drillmodule from "highcharts/modules/drilldown.js";
import treemapModule from "highcharts/modules/treemap.js";
import bulletModule from "highcharts/modules/bullet.js";
import funnelModule from "highcharts/modules/funnel.js";
import heatmap from "highcharts/modules/heatmap.js";
import patternFill from "highcharts/modules/pattern-fill.js";
import sankeyModule from "highcharts/modules/sankey.js";
import dependencyWheelModule from "highcharts/modules/dependency-wheel.js";

drillmodule.factory(Highcharts);
treemapModule.factory(Highcharts);
bulletModule.factory(Highcharts);
funnelModule.factory(Highcharts);
sankeyModule.factory(Highcharts);
dependencyWheelModule.factory(Highcharts);
heatmap.factory(Highcharts);
HighchartsMore.factory(Highcharts);
patternFill.factory(Highcharts);
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
