import { BasketItem } from "./BasketItem";

const BasketList = (props) => {
    const { order = [],
        handleBusketShow = Function.prototype,
        deleteItem = Function.prototype,
        incQuantity = Function.prototype,
        decQuantity = Function.prototype
    } = props;

    const totalPrice = order.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
            <li className="collection-item active light-blue darken-4">Basket<i onClick={handleBusketShow} className="btn-close material-icons black white-text right">close</i></li>
            {
                order.length ? order.map(item => (
                    <BasketItem key={item.id} {...item}
                        deleteItem={deleteItem}
                        incQuantity={incQuantity}
                        decQuantity={decQuantity}
                    />
                )) : (<li className='collection-item'>Empty</li>)
            }
            <li className="collection-item active light-blue darken-4">
                Total Price: {totalPrice} UAH
            </li>
            <button className="btn light-blue darken-4 right checkout-btn">Checkout</button>
        </ul>
    )
}

export { BasketList };