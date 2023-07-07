// (C) 2023 GoodData Corporation

import { render, version as reactVersion } from "react-dom";
import { createRoot, Root } from "react-dom/client";
import { satisfies } from "semver";

const isReact18 = !satisfies(reactVersion, "<18.0.0");

export { isReact18, render, createRoot, Root };
