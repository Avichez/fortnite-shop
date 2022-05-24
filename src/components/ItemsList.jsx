import React from "react";
import { ShopItem } from "./ShopItem";

const ItemsList = (props) => {

    const { items = [], addToCart = Function.prototype } = props;

    if (!items.length) {
        return <h3>Nothing found, reload site.</h3>
    }

    return (
        <div className="items_list">
        {
            items.map(item => <ShopItem key={item.id} {...item} addToCart={addToCart}/>)
        }
        </div>
    )
}

export { ItemsList };