// (C) 2019-2023 GoodData Corporation
import globalAxios, { AxiosRequestConfig } from "axios";

// There are known compatibility issues between CommonJS (CJS) and ECMAScript modules (ESM).
// In ESM, default exports of CJS modules are wrapped in default properties instead of being exposed directly.
// https://github.com/microsoft/TypeScript/issues/52086#issuecomment-1385978414
const axios = globalAxios as unknown as typeof globalAxios.default;

export class TigerCancellationConverter {
    constructor(private readonly signal: AbortSignal | null) {}

    public forAxios(): Pick<AxiosRequestConfig, "cancelToken"> {
        const { signal } = this;

        if (!signal) {
            return {};
        }

        const source = axios.CancelToken.source();

        signal.addEventListener("abort", () => source.cancel());

        return {
            cancelToken: source.token,
        };
    }
}
