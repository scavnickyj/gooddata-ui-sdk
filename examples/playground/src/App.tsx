// (C) 2019-2024 GoodData Corporation
import React, { useMemo } from "react";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { createBackend } from "./createBackend.js";
import { MyApp } from "./playground/MyApp.js";
import { ThemeProvider } from "@gooddata/sdk-ui-theme-provider";
import { ITheme } from "@gooddata/sdk-model";

const useTheme: any = false;
const customTheme: ITheme = useTheme
    ? {
          palette: {
              complementary: {
                  c0: "#292727",
                  c1: "#323232",
                  c2: "#424242",
                  c3: "#4E4E4E",
                  c4: "#5F5F5F",
                  c5: "#7B7B7B",
                  c6: "#A0A0A0",
                  c7: "#B9B9B9",
                  c8: "#D6D6D6",
                  c9: "#EAEAEA",
              },
          },
      }
    : {};

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
        <ThemeProvider theme={customTheme}>
            <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={WORKSPACE}>
                    {/* Build your playground components under the playground directory.*/}
                    <MyApp />
                </WorkspaceProvider>
            </BackendProvider>
        </ThemeProvider>
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
