// (C) 2019 GoodData Corporation
import React from "react";
import { FormattedMessage } from "react-intl";
import cx from "classnames";

export default class UnsupportedProperties extends React.Component {
    public render(): React.ReactNode {
        return (
            <div className={this.getClassNames()}>
                <FormattedMessage id="properties.unsupported" />
            </div>
        );
    }

    private getClassNames() {
        return cx("adi-unsupported-configuration", "s-properties-unsupported");
    }
}
