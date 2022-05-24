import React from 'react'

const BasketItem = (props) => {

    const {
        id,
        name,
        price,
        quantity,
        icon,
        deleteItem = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype,
    } = props;

    return (
        <li className='collection-item'>
            <div className='item-wrapper'>
                <img className='item-img' src={icon} alt='item-img' width='50px' height='50px' />
                {name} <i onClick={() => decQuantity(id)} className="material-icons quantity-btn">chevron_left</i> x{quantity} <i onClick={() => incQuantity(id)} className="material-icons quantity-btn">chevron_right</i> = {price * quantity} UAH
            </div>
            <span onClick={() => deleteItem(id)} class="right delete-icon"><i class="material-icons black-text delete-item">clear</i></span>
        </li>
    )
}

export { BasketItem };
