// (C) 2019-2022 GoodData Corporation
import { idRef } from "@gooddata/sdk-model";
import React from "react";

import * as Mocks from "./DashboardEditLayout/DashboardEditLayoutMocks.js";
import {
    RenderDashboardEditLayout,
    IDashboardEditLayoutProps,
} from "./DashboardEditLayout/DashboardEditLayout.js";
import { IntlWrapper } from "@gooddata/sdk-ui";
import { render } from "@testing-library/react";
import { IDashboardEditLayout } from "./DashboardEditLayout/DashboardEditLayoutTypes.js";

const dashboardEditLayout = Mocks.layoutMock([
    Mocks.rowMock([[Mocks.widgetKpiPlaceholderMock()]]),
    Mocks.rowMock([[Mocks.widgetDropzoneHotspotMock(idRef(""))]]),
    Mocks.rowMock([[Mocks.widgetDropzoneMock()]]),
    Mocks.rowMock([[Mocks.widgetMock()]]),
]);

const lay:IDashboardEditLayout = {
    
    type: "IDashboardLayout",

    
    sections: [],
}

function createComponent(customProps: Partial<IDashboardEditLayoutProps> = {}) {
    return render(
        <IntlWrapper>
            <RenderDashboardEditLayout layout={lay} {...customProps} />
        </IntlWrapper>,
    );
}

describe("DashboardEditLayout in KD", () => {
    it("should render layout in KD old edit mode - layout must not have dependency on SDK state, use selectors, context...", () => {
        const { container } = createComponent();

        expect(container.getElementsByClassName("gd-dashboards")).toHaveLength(1);
    });
});
