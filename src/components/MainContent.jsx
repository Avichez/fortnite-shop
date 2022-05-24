import React, { useEffect, useState } from "react";
import { API_KEY, API_URL } from "./../config";
import { Cart } from "./Cart";
import { ItemsList } from "./ItemsList";
import { Preloader } from "./Preloader";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

const MainContent = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [order, setOrder] = useState([]);
    const [isBasketShow, setBasketShow] = useState(false);
    const [alertName, setAlertName] = useState('');

    useEffect(function getItems() {
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                data.featured && setItems(data.featured);
                setIsLoading(false);
            });
    }, []);

    const incQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                let newQuantity = el.quantity + 1
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const decQuantity = (itemId) => {
        const newOrder = order.map(el => {
            if (el.id === itemId) {
                let newQuantity = el.quantity > 0 ? el.quantity - 1 : 0;
                return {
                    ...el,
                    quantity: newQuantity
                }
            } else {
                return el
            }
        })
        setOrder(newOrder)
    }

    const deleteItem = (itemId) => {
        const newOrder = order.filter(item => item.id !== itemId);
        setOrder(newOrder);
    }

    const handleBusketShow = () => {
        setBasketShow(!isBasketShow);
    };

    const clearAlert = () => {
        setAlertName('');
    }

    const addToCart = (item) => {
        const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setOrder([...order, newItem]);
        } else {
            const newOrder = order.map((orderItem, index) => {
                if (index === itemIndex) {
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1,
                    };
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
        setAlertName(item.name);
    };

    return (
        <main className="content container">
            <Cart quantity={order.length} handleBusketShow={handleBusketShow} />
            <div className="title-wrapper">
                <h3 className="shop-title">Daily Items</h3>
            </div>
            {isLoading ? (
                <Preloader />
            ) : (
                <ItemsList items={items} addToCart={addToCart} />
            )}
            {
                isBasketShow && <BasketList order={order}
                    handleBusketShow={handleBusketShow}
                    deleteItem={deleteItem}
                    incQuantity={incQuantity}
                    decQuantity={decQuantity}
                />
            }
            {alertName && <Alert name={alertName} clearAlert={clearAlert} />}
        </main>
    );
};

export { MainContent };
