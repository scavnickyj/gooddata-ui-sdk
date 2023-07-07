// (C) 2023 GoodData Corporation

import ReactDOM from "react-dom";
import { satisfies } from "semver";

interface Root {
    render(children: React.ReactNode): void;
    unmount(): void;
}

const { render, version: reactVersion } = ReactDOM;

const isReact18 = !satisfies(reactVersion, "<18.0.0");

let createRoot: (container: Element | DocumentFragment) => Root;
if (isReact18) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    createRoot = ReactDOM.createRoot;
}

export { isReact18, render, createRoot, Root };
