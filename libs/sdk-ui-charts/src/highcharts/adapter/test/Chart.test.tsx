// (C) 2007-2023 GoodData Corporation
import React from "react";
import { render } from "@testing-library/react";

import Highcharts from "../../lib/index.js";
import { Chart } from "../Chart.js";

const destroyMock = vi.fn();

vi.mock("highcharts", () => {
    return {
        Chart: (_: any, callback: any) => ({
            callback: callback(),
            destroy: destroyMock,
        }),
    };
});

vi.mock("highcharts/modules/drilldown", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/treemap", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/bullet", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/heatmap", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/funnel", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/sankey", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/dependency-wheel", () => {
    return (H: any) => H;
});

vi.mock("highcharts/highcharts-more", () => {
    return (H: any) => H;
});

vi.mock("highcharts/modules/pattern-fill", () => {
    return (H: any) => H;
});

vi.mock("../chartPlugins", () => {
    return {
        initChartPlugins: (H: any) => H,
    };
});

describe("Chart", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    function createComponent(props: any = {}) {
        return render(<Chart config={{}} {...props} />);
    }

    it("should render highcharts", () => {
        const spy = vi.spyOn(Highcharts as any, "Chart");
        createComponent();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it("should call callback on componentDidMount", () => {
        const callback = vi.fn();
        createComponent({ callback });
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it("should call destroy callback on componentWillUnmount", () => {
        createComponent();

        () => expect(destroyMock).toHaveBeenCalledTimes(1);
    });
});
