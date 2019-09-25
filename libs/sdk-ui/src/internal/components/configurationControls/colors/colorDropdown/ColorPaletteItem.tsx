// (C) 2019 GoodData Corporation
import * as React from "react";
import { IColorItem, IGuidColorItem } from "@gooddata/sdk-model";
import * as classNames from "classnames";
import { IColorPaletteItem } from "../../../../../base/interfaces/Colors";

const ITEM_MARGIN = 5;

export interface IColorPaletteItemProps {
    selected: boolean;
    paletteItem: IColorPaletteItem;
    onColorSelected: (color: IColorItem) => void;
}

export default class ColorPaletteItem extends React.PureComponent<IColorPaletteItemProps> {
    private itemRef: any;

    constructor(props: IColorPaletteItemProps) {
        super(props);
        this.itemRef = (React as any).createRef();
    }

    public render() {
        return (
            <div
                ref={this.itemRef}
                onClick={this.onColorSelected}
                style={{
                    backgroundColor: this.getRgbStringFromPaletteItem(),
                }}
                className={this.getClassNames()}
            />
        );
    }

    public componentDidMount() {
        this.scrollSelectedItemIntoParent();
    }

    private scrollSelectedItemIntoParent() {
        if (this.props.selected && this.itemRef.current && this.itemRef.current.parentNode) {
            if (this.isItemVisible()) {
                const target = this.itemRef.current;
                target.parentNode.scrollTop = target.offsetTop - target.parentNode.offsetTop - ITEM_MARGIN;
            }
        }
    }

    private isItemVisible() {
        const target = this.itemRef.current;
        const offset = target.offsetTop - target.parentNode.offsetTop;
        const itemHeight = target.clientHeight;
        const parentHeight = target.parentNode.clientHeight;

        return parentHeight < offset + itemHeight;
    }

    private getClassNames() {
        return classNames("gd-color-list-item", `s-color-list-item-${this.props.paletteItem.guid}`, {
            "gd-color-list-item-active": this.props.selected,
        });
    }

    private getRgbStringFromPaletteItem() {
        const { r, g, b } = this.props.paletteItem.fill;
        return `rgb(${r},${g},${b})`;
    }

    private onColorSelected = () => {
        const selectedItem: IGuidColorItem = {
            type: "guid",
            value: this.props.paletteItem.guid,
        };

        this.props.onColorSelected(selectedItem);
    };
}
