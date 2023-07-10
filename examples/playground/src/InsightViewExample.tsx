import React from "react";
import { InsightView } from "@gooddata/sdk-ui-ext";
import { react18render, react18unmount } from "./reactRenderers.js";

export interface IExampleProps {
    insight?: string;
}

export const InsightViewExample: React.FC<IExampleProps> = (props) => {
    const { insight = "4e6ec8f9-5da4-4061-8653-53fe956083c1" } = props;
    // const { insight = "4db9e913-f8c4-4d2f-bb65-76fcc6b58baa" } = props;

    return (
        <div style={{ width: "1024px", height: "640px", padding: 20 }}>
            <InsightView insight={insight} renderer={react18render} unmount={react18unmount} />
        </div>
    );
};
