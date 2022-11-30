import React from 'react';
import classes from "./itog_price.module.css";
import Title3 from "../../../basic/title/Title3";
import Button from "../../../basic/UI/button/Button";
import {useSelector} from "react-redux";

const ItogPrice = () => {
    const cart = useSelector(state => state.inCart.products);

    const totalPriceQuantity = () => {
        let price = 0;
        let quantity = 0;
        cart.forEach(i => {
            price += i.count * i.price
            quantity += i.count
        })
        return {price, quantity}
    }

    return (
        <div className={classes.container}>
            <Title3 props="Детали заказа"/>
            <div className={classes.text_container}>
                <div className={classes.text}>Итого:</div>
                <div className={classes.text_mod}>3090 ₽</div>
            </div>
            <div className={classes.text_container}>
                {cart.length > 0 && <div className={classes.mainText}>{totalPriceQuantity().quantity} товар</div>}
                <div className={classes.mainText_mod}>{totalPriceQuantity().price} ₽</div>
            </div>
            <Button>Перейти к оформлению</Button>
            <div className={classes.text_delivery}>Пункты выдачи: <a href="#" className={classes.link}>доступны</a>
            </div>
        </div>
    );
};

export default ItogPrice;