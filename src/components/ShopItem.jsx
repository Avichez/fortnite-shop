import React from "react";

const ShopItem = (props) => {

    const {
        id,
        name,
        description,
        type,
        price,
        icon,
        full_background,
        addToCart = Function.prototype
    } = props;


    return (
        <div className="card" id={id}>
            <div className="card-image">
                <img src={full_background} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title grey-text text-darken-4">{name}</span>
                <p>Type: {type}</p>
                <p>{description}</p>
                <div class="card-action">
                    <button onClick={() => addToCart({
                        id,
                        name,
                        price,
                        icon,
                    })} className="waves-effect light-blue darken-4 btn" href="!#">BUY</button>
                    <span className="right text-price">{price} UAH</span>
                </div>
            </div>
        </div>
    )
}

export { ShopItem };