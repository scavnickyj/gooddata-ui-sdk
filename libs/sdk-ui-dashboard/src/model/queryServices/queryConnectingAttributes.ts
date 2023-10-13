// (C) 2022 GoodData Corporation

import { ObjRef, serializeObjRef } from "@gooddata/sdk-model";
import { SagaIterator } from "redux-saga";
import { call, SagaReturnType, select } from "redux-saga/effects";
import compact from "lodash/compact.js";
import { QueryConnectingAttributes } from "../queries/connectingAttributes.js";
import { selectAttributeFilterDisplayFormsMap } from "../store/index.js";
import { createCachedQueryService } from "../store/_infra/queryService.js";
import { DashboardContext } from "../types/commonTypes.js";
import { invalidQueryArguments } from "../events/general.js";
import { IConnectingAttribute } from "../types/attributeFilterTypes.js";

export const QueryConnectingAttributesService = createCachedQueryService(
    "GDC.DASH/QUERY.CONNECTING.ATTRIBUTES",
    queryService,
    (query: QueryConnectingAttributes) => {
        const {
            payload: { refs },
        } = query;
        const serializedRefs = refs.flatMap((refs) => refs).map(serializeObjRef);

        return serializedRefs.join("&");
    },
);

async function loadConnectingAttributes(
    ctx: DashboardContext,
    attributeRefs: ObjRef[][],
): Promise<ObjRef[][]> {
    const { backend, workspace } = ctx;

    return await backend.workspace(workspace).attributes().getCommonAttributesBatch(attributeRefs);
}

async function loadConnectingAttributesMeta(
    ctx: DashboardContext,
    connectingAttributeRefs: ObjRef[][],
): Promise<IConnectingAttribute[][]> {
    const { backend, workspace } = ctx;

    const attributeMetaObjects = await Promise.all(
        connectingAttributeRefs.map((refsEntry) =>
            Promise.all(refsEntry.map((ref) => backend.workspace(workspace).attributes().getAttribute(ref))),
        ),
    );

    return attributeMetaObjects.map((entry) => {
        return entry.map((attributeMeta) => {
            return {
                title: attributeMeta.title,
                ref: attributeMeta.ref,
            };
        });
    });
}

/**
 * First element of every inner array is child display form and the second is parent display form.
 * When backend does not support multiple connecting attributes, only the parent display form
 * is converted to attribute, for validation purposes. Child display form should stay as is.
 */
function* mapDisplayFormsToAttributes(refs: ObjRef[][], supportsMultipleConnectingAttributes: boolean) {
    const attributeDisplayFormsMap: ReturnType<typeof selectAttributeFilterDisplayFormsMap> = yield select(
        selectAttributeFilterDisplayFormsMap,
    );

    return refs.map((displayFormRefsEntry) => {
        return displayFormRefsEntry.map((displayFormRef, index) => {
            if (!supportsMultipleConnectingAttributes && index === 0) {
                return displayFormRef;
            }

            return attributeDisplayFormsMap.get(displayFormRef)?.attribute;
        });
    });
}

function* queryService(
    ctx: DashboardContext,
    query: QueryConnectingAttributes,
): SagaIterator<IConnectingAttribute[][]> {
    const {
        payload: { refs },
        correlationId,
    } = query;

    const supportsMultipleConnectingAttributes =
        !!ctx.backend.capabilities.supportsMultipleConnectingAttributes;
    const attributeRefs: SagaReturnType<typeof mapDisplayFormsToAttributes> = yield call(
        mapDisplayFormsToAttributes,
        refs,
        supportsMultipleConnectingAttributes,
    );
    const nonEmptyAttributesRef = compact(attributeRefs.map((refsEntry) => compact(refsEntry)));

    if (refs.length !== nonEmptyAttributesRef.length) {
        throw invalidQueryArguments(ctx, `Cannot find attributes for given displayForms`, correlationId);
    }

    const connectingAttributesRefs: SagaReturnType<typeof loadConnectingAttributes> = yield call(
        loadConnectingAttributes,
        ctx,
        nonEmptyAttributesRef,
    );
    const connectingAttributes: SagaReturnType<typeof loadConnectingAttributesMeta> = yield call(
        loadConnectingAttributesMeta,
        ctx,
        connectingAttributesRefs,
    );

    return connectingAttributes;
}
