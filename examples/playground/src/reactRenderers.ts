// (C) 2023 GoodData Corporation

import { createRoot, Root } from "react-dom/client";

const reactRootsMap: { [key: string]: Root } = {};

//
// this will be manually imported only when app is using react 18
//

export const react18render = (component: any, target: Element) => {
    if (!reactRootsMap[target.id]) {
        reactRootsMap[target.id] = createRoot(target);
    }
    reactRootsMap[target.id].render(component);
};

export const react18unmount = () =>
    Object.values(reactRootsMap).map((root: Root) => {
        root.render(null);
        // setTimeout(() => {
        // root.unmount();
        // }, 0);
    });
