// (C) 2021-2022 GoodData Corporation
import { IAttributeElement } from "@gooddata/sdk-model";
import { Message } from "@gooddata/sdk-ui-kit";
import React from "react";
import { AttributeFilterFilteredStatus } from "./AttributeFilterFilteredStatus.js";
import { AttributeFilterSelectionStatus } from "./AttributeFilterSelectionStatus.js";
import { AttributeFilterShowAll } from "./AttributeFilterShowAll.js";

/**
 * It represents component that display status of current selection.
 * @beta
 */
export interface IAttributeFilterStatusBarProps {
    /**
     * Number of elements that respect current criteria.
     */
    totalElementsCountWithCurrentSettings: number;

    /**
     * Indicate that elements are filtered by parents filters or not.
     */
    isFilteredByParentFilters: boolean;

    /**
     * List of parent filter titles that filter current elements.
     *
     * @beta
     */
    parentFilterTitles: string[];

    /**
     * List of irrelevant element titles in selection.
     *
     * @beta
     */
    irrelevantElementTitles: string[];

    /**
     * Indicate that current filter is inverted {@link @gooddata/sdk-model#INegativeAttributeFilter} or not {@link @gooddata/sdk-model#IPositiveAttributeFilter}
     *
     * @beta
     */
    isInverted: boolean;

    /**
     * List of selected items
     * @beta
     */
    selectedItems: IAttributeElement[];

    /**
     * Item title getter used to get translated item empty value
     *
     * @beta
     */
    getItemTitle: (item: IAttributeElement) => string;

    /**
     * Maximum selected items
     *
     * @beta
     */
    selectedItemsLimit: number;

    /**
     * Show option to list all items when items are filtered
     *
     * @beta
     */
    showAllOption: boolean;

    /**
     * Show all click callback
     *
     * @beta
     */
    onShowAllClick: () => void;
}

/**
 * A component that displays status of current selection, like number of selected elements, if Attribute Filter is inverted and list of selected elements.
 *
 * @beta
 */
export const AttributeFilterStatusBar: React.FC<IAttributeFilterStatusBarProps> = (props) => {
    const {
        isFilteredByParentFilters,
        parentFilterTitles,
        irrelevantElementTitles,
        totalElementsCountWithCurrentSettings,
        getItemTitle,
        isInverted,
        selectedItems,
        selectedItemsLimit,
        showAllOption,
        onShowAllClick,
    } = props;

    return (
        <div className="gd-attribute-filter-status-bar__next">
            {/* eslint-disable-next-line no-console */}
            {showAllOption ? <AttributeFilterShowAll onClick={onShowAllClick} /> : null}
            <AttributeFilterSelectionStatus
                isInverted={isInverted}
                getItemTitle={getItemTitle}
                selectedItems={selectedItems}
                selectedItemsLimit={selectedItemsLimit}
            />
            {irrelevantElementTitles.length ? (
                <Message className="gd-attribute-filter-status-irrelevant-message" type="warning">
                    Irrelevant value in selection.&nbsp;<span className="gd-action-clear">Clear</span>
                </Message>
            ) : null}
            {isFilteredByParentFilters && totalElementsCountWithCurrentSettings > 0 ? (
                <AttributeFilterFilteredStatus parentFilterTitles={parentFilterTitles} />
            ) : null}
        </div>
    );
};
