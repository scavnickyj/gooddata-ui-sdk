// (C) 2007-2019 GoodData Corporation
import { ISeparators } from "@gooddata/numberjs";
import { VisualizationObject } from "@gooddata/gd-bear-model";
import { IColorItem, IColor } from "@gooddata/sdk-model";
import { VisType } from "../base/constants/visualizationTypes";
import { IHeaderPredicate2 } from "../base/interfaces/HeaderPredicate";
import { IMappingHeader } from "../base/interfaces/MappingHeader";
import {
    HTMLDOMElement,
    SVGDOMElement,
    SVGAttributes,
    StackItemObject,
    DataLabelsOptionsObject,
    ColorAxisOptions,
} from "./chart/highcharts/highchartsEntryPoint";

export { DEFAULT_COLOR_PALETTE } from "../base/constants/defaultColors";

export type PositionType = "left" | "right" | "top" | "bottom" | "auto";

export type IDataLabelsVisible = string | boolean;

export interface IDataLabelsConfig {
    visible?: IDataLabelsVisible;
    width?: number;
    padding?: number;
    element?: HTMLDOMElement | SVGDOMElement;
}

export interface IColorMapping {
    // sent to SDK
    predicate: IHeaderPredicate2;
    color: IColorItem;
}

export interface IColorAssignment {
    // << send from SDK up
    headerItem: IMappingHeader;
    color: IColorItem;
}

export interface IColorPaletteItem {
    guid: string;
    fill: IColor;
}

export interface IColorPalette extends Array<IColorPaletteItem> {}

export interface ILegendConfig {
    enabled?: boolean;
    position?: PositionType;
    responsive?: boolean;
}

export interface IChartLimits {
    series?: number;
    categories?: number;
    dataPoints?: number;
}

export interface IMeasuresStackConfig {
    stackMeasures?: boolean;
    stackMeasuresToPercent?: boolean;
}

export interface IChartConfig extends IMeasuresStackConfig {
    colors?: string[];
    colorPalette?: IColorPalette;
    colorMapping?: IColorMapping[];
    type?: VisType;
    legend?: ILegendConfig;
    legendLayout?: string;
    limits?: IChartLimits;
    stacking?: boolean;
    grid?: any;
    yFormat?: string;
    yLabel?: string;
    xFormat?: string;
    xLabel?: string;
    chart?: any;
    xaxis?: IAxisConfig;
    yaxis?: IAxisConfig;
    secondary_xaxis?: IAxisConfig;
    secondary_yaxis?: IAxisConfig;
    separators?: ISeparators;
    dataLabels?: IDataLabelsConfig;
    dualAxis?: boolean;
    primaryChartType?: VisualizationObject.VisualizationType;
    secondaryChartType?: VisualizationObject.VisualizationType;
}

export interface IStackLabels {
    enabled?: boolean;
}

export interface IHighChartAxis {
    AXIS_LINE_COLOR: string;
    categories: string[];
    opposite: boolean;
    stackLabels: IStackLabels;
    defaultFormat?: string;
    gridLineColor?: string;
    gridLineWidth?: number;
    min?: number;
    max?: number;
    visible?: boolean;
}

export interface IYAxisConfig {
    yAxis?: IHighChartAxis[];
}

export interface IStackMeasuresConfig {
    series?: ISeriesItem[];
    yAxis?: IHighChartAxis[];
}

export interface IAxisConfig {
    visible?: boolean;
    labelsEnabled?: boolean;
    rotation?: string;
    min?: string;
    max?: string;
    measures?: string[];
    stacks?: IStackItem;
    series?: ISeriesItem[];
    stackTotalGroup?: SVGAttributes;
}

export interface IAxis {
    label: string;
    format?: string;
    opposite?: boolean;
    seriesIndices?: number[];
}

export interface ISeriesDataItem {
    x?: number;
    y: number;
    value?: number;
    name?: string;
}

export interface IStackItem {
    column0?: StackItemObject[];
    column?: ISeriesDataItem[];
}

export interface ISeriesItem {
    name?: string;
    data?: ISeriesDataItem[];
    color?: string;
    userOptions?: any;
    visible?: boolean;
    type?: VisualizationObject.VisualizationType | string;
    isDrillable?: boolean;
    legendIndex?: number;
    yAxis?: number;
    zIndex?: number;
    labelKey?: string;
    stack?: number;
    stacking?: string;
    dataLabels?: DataLabelsOptionsObject;
    dataLabelsGroup?: SVGAttributes;
}

export interface IShapeArgsConfig {
    width?: number;
    heigth?: number;
    x?: number;
    y?: number;
}

export interface IChartOptions {
    type?: string;
    stacking?: any;
    hasStackByAttribute?: boolean;
    hasViewByAttribute?: boolean;
    isViewByTwoAttributes?: boolean;
    legendLayout?: string;
    xAxes?: any;
    yAxes?: any;
    data?: any;
    actions?: any;
    grid?: any;
    xAxisProps?: any;
    yAxisProps?: any;
    secondary_xAxisProps?: any;
    secondary_yAxisProps?: any;
    title?: any;
    colorAxis?: ColorAxisOptions;
    colorAssignments?: IColorAssignment[];
    colorPalette?: IColorPalette;
}

export interface IPatternOptionsObject {
    path: SVGAttributes;
    width: number;
    height: number;
}
export interface IPatternObject {
    pattern: IPatternOptionsObject;
}

export interface IPointData {
    /**
     * Custom properties set by custom data options.
     */
    [property: string]: any;
    x?: number;
    y?: number;
    z?: number;
    value?: number;
    format?: string;
    marker?: {
        enabled: boolean;
    };
    name?: string;
    color?: string | IPatternObject;
    legendIndex?: number;
    id?: string;
    parent?: string;
    drilldown?: boolean;
    drillIntersection?: any;
    borderWidth?: number;
    borderColor?: string;
    pointPadding?: number;
    series?: ISeriesItem;
    category?: ICategory;
}

export interface ICategoryParent {
    name: string;
}

// since applying 'grouped-categories' plugin, 'category' type is replaced from string to object in highchart
export interface ICategory {
    name: string;
    parent?: ICategoryParent;
}

export interface ISeriesItemConfig {
    color: string;
    legendIndex: number;
    data?: any;
    name?: string;
    yAxis?: number;
    xAxis?: number;
}

export interface IClientRect {
    width?: number;
    height?: number;
    left?: number;
    right?: number;
    x?: number;
    y?: number;
}