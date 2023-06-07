// (C) 2020-2023 GoodData Corporation

import axios, { AxiosResponse } from "axios";
import { ILiveFeatures } from "@gooddata/api-client-tiger";
import { getFeatureHubFeatures, FeatureHubResponse } from "../hub.js";
import { FeatureDef } from "../feature.js";
import { pickContext } from "../index.js";

// There are known compatibility issues between CommonJS (CJS) and ECMAScript modules (ESM).
// In ESM, default exports of CJS modules are wrapped in default properties instead of being exposed directly.
// https://github.com/microsoft/TypeScript/issues/52086#issuecomment-1385978414
const axiosDefault = axios as unknown as typeof axios.default;
const axiosGetSpy = jest.spyOn(axiosDefault, "get");

describe("live features", () => {
    function createFeatures(earlyAccess = ""): ILiveFeatures["live"] {
        return { configuration: { host: "/", key: "" }, context: { earlyAccess } };
    }

    function createFeature(key: string, type: FeatureDef["type"], value: any): FeatureDef {
        return {
            id: Math.random().toString(),
            key,
            type,
            value,
            l: false,
            version: "1",
        };
    }

    function mockReturn(
        features: FeatureHubResponse[number]["features"] = [],
        status = 200,
        etag = "current",
    ) {
        axiosGetSpy.mockResolvedValueOnce({
            data: [{ id: "test", features }],
            headers: { etag },
            status,
            statusText: "",
            config: {},
        } as AxiosResponse<FeatureHubResponse>);
    }

    it("call axios", async () => {
        mockReturn([]);

        await getFeatureHubFeatures(createFeatures());
        expect(axiosGetSpy).toHaveBeenCalledWith("/features", {
            baseURL: "/",
            headers: {
                "Content-type": "application/json",
                "X-FeatureHub": "earlyAccess=",
            },
            method: "GET",
            params: { sdkUrl: "" },
            validateStatus: expect.anything(),
            timeout: 30000,
        });
    });

    it("call axios with ws context", async () => {
        mockReturn([]);

        await getFeatureHubFeatures(createFeatures(), pickContext({ earlyAccess: "omega" }));
        expect(axiosGetSpy).toHaveBeenCalledWith("/features", {
            baseURL: "/",
            headers: {
                "Content-type": "application/json",
                "X-FeatureHub": "earlyAccess=omega",
                "if-none-match": expect.anything(),
            },
            method: "GET",
            params: { sdkUrl: "" },
            validateStatus: expect.anything(),
            timeout: 30000,
        });
    });

    it("call axios with context filled", async () => {
        mockReturn([]);

        await getFeatureHubFeatures(createFeatures("beta"));
        expect(axiosGetSpy).toHaveBeenCalledWith("/features", {
            baseURL: "/",
            headers: {
                "Content-type": "application/json",
                "X-FeatureHub": "earlyAccess=beta",
                "if-none-match": expect.anything(),
            },
            method: "GET",
            params: { sdkUrl: "" },
            validateStatus: expect.anything(),
            timeout: 30000,
        });
    });

    it("call axios with context and ws context filled", async () => {
        mockReturn([]);

        await getFeatureHubFeatures(createFeatures("beta"), pickContext({ earlyAccess: "omega" }));
        expect(axiosGetSpy).toHaveBeenCalledWith("/features", {
            baseURL: "/",
            headers: {
                "Content-type": "application/json",
                "X-FeatureHub": "earlyAccess=omega",
                "if-none-match": expect.anything(),
            },
            method: "GET",
            params: { sdkUrl: "" },
            validateStatus: expect.anything(),
            timeout: 30000,
        });
    });

    it("empty definition", async () => {
        mockReturn([]);

        const results = await getFeatureHubFeatures(createFeatures());
        expect(results).toEqual({});
    });

    it("full definition - BOOLEAN", async () => {
        mockReturn([
            createFeature("ADMeasureValueFilterNullAsZeroOption", "BOOLEAN", true),
            createFeature("dashboardEditModeDevRollout", "BOOLEAN", true),
            createFeature("enableKPIDashboardDeleteFilterButton", "BOOLEAN", true),
            createFeature("enableMultipleDates", "BOOLEAN", true),
            createFeature("enableSortingByTotalGroup", "BOOLEAN", true),
        ]);

        const results = await getFeatureHubFeatures(createFeatures());
        expect(results).toEqual({
            ADMeasureValueFilterNullAsZeroOption: true,
            dashboardEditModeDevRollout: true,
            enableKPIDashboardDeleteFilterButton: true,
            enableMultipleDates: true,
            enableSortingByTotalGroup: true,
        });
    });

    it("full definition - STRING", async () => {
        mockReturn([
            createFeature("ADMeasureValueFilterNullAsZeroOption", "STRING", "EnabledUncheckedByDefault"),
            createFeature("dashboardEditModeDevRollout", "STRING", "ENABLED"),
            createFeature("enableKPIDashboardDeleteFilterButton", "STRING", "ENABLED"),
            createFeature("enableMultipleDates", "STRING", "ENABLED"),
            createFeature("enableSortingByTotalGroup", "STRING", "TRUE"),
        ]);

        const results = await getFeatureHubFeatures(createFeatures());
        expect(results).toEqual({
            ADMeasureValueFilterNullAsZeroOption: "EnabledUncheckedByDefault",
            dashboardEditModeDevRollout: true,
            enableKPIDashboardDeleteFilterButton: true,
            enableMultipleDates: true,
            enableSortingByTotalGroup: true,
        });
    });
});
