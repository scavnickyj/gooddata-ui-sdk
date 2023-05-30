// (C) 2019 GoodData Corporation
/* eslint-disable import/no-unassigned-import */
import * as raf from "raf";
import { jest } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect";

raf.polyfill();

global.jest = jest;

// fixes default import of memoize-one
jest.mock("memoize-one", () => ({
    default: jest.requireActual("memoize-one"),
}));

jest.unstable_mockModule("@gooddata/numberjs", () => ({
    ...jest.requireActual("@gooddata/numberjs"),
    // colors2Object: jest.fn(),
    // numberFormat: jest.fn(),
}));
