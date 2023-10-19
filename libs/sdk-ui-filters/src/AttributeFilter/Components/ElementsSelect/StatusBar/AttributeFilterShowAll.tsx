// (C) 2023 GoodData Corporation

import React from "react";

interface IAttributeFilterShowAllProps {
    onClick: () => void;
}

export const AttributeFilterShowAll: React.FC<IAttributeFilterShowAllProps> = ({ onClick }) => {
    return (
        <div className="gd-attribute-filter-status-show-all__next">
            Relevant values only.&nbsp;
            <span className="gd-action-show-all" onClick={onClick}>
                Show all
            </span>
        </div>
    );
};
