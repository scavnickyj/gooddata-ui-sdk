// (C) 2019 GoodData Corporation
import { createRequire } from "module";
import base from "../../common/config/jest/jest.config.base.mjs";
process.env = Object.assign(process.env, { NODE_ICU_DATA: "node_modules/full-icu" });

const require = createRequire(import.meta.url);

export default {
    ...base,
    moduleNameMapper: {
        ...base.moduleNameMapper,
        "^uuid$": require.resolve("uuid"),
    },
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
