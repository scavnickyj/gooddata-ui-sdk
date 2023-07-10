// (C) 2019-2023 GoodData Corporation
import React, { useMemo } from "react";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { createBackend } from "./createBackend.js";
// import { DashboardExample } from "./playground/DashboardExample.js";
import { InsightViewExample } from "./playground/InsightViewExample.js";
// import { BaseVisualizationExample } from "./playground/BaseVisualizationExample.js";

function hasCredentialsSetup(): boolean {
    if (BACKEND_TYPE === "tiger") {
        return !!process.env.TIGER_API_TOKEN;
    }
    return BUILD_TYPE === "public" || (process.env.GDC_USERNAME && process.env.GDC_PASSWORD);
}

const AppWithBackend: React.FC = () => {
    // only create the backend instance once
    const backend = useMemo(() => {
        return createBackend();
    }, []);

    return (
        <BackendProvider backend={backend}>
            <WorkspaceProvider workspace={WORKSPACE}>
                {/* Build your playground components under the playground directory.*/}
                {/* <DashboardExample /> */}
                <InsightViewExample />
                {/* <BaseVisualizationExample
                    backend={backend}
                    projectId={WORKSPACE}
                    insightUri={"edb41f54-7c7b-4d2f-b903-0cc18a305ffa"}
                /> */}
            </WorkspaceProvider>
        </BackendProvider>
    );
};

export const App: React.FC = () => {
    if (!hasCredentialsSetup()) {
        return (
            <p>
                Your playground is not setup with credentials. Check out the README.md for more. TL;DR: point
                the playground against the public access proxy or set GDC_USERNAME and GDC_PASSWORD or
                TIGER_API_TOKEN in the .env file.
            </p>
        );
    }

    return <AppWithBackend />;
};
