// (C) 2019 GoodData Corporation
import base from "../../common/config/jest/jest.config.base.mjs";
process.env = Object.assign(process.env, { NODE_ICU_DATA: "node_modules/full-icu" });

export default {
    ...base,
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
