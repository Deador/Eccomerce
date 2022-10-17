import React, {useEffect, useState} from "react";
import classes from "./ModaleCart.module.css";
import Button from "../UI/button/Button";
import ItemCart from "./item_cart/ItemCart";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../store/inCart";

const ModaleCart = () => {
    const dispath = useDispatch();
    const cart = useSelector((state) => state.inCart.products);

    // useEffect(() => {
    //     if (cart.length > 0) {
    //         console.log("Добавлен товар");
    //     } else {
    //         console.log("Корзина пуста");
    //     }
    // }, [cart]);

    const removeProduct=(item)=>{
        dispath(removeItem(item))
    }


    // Обшая стоимость всех товаров в корзине
    // let totalCount = 0;
    // const summation = () => {
    //   cart.forEach((item) => {
    //     const countItem = item.price * item.count;
    //     totalCount += countItem;
    //   });
    // };
    // summation();

    return (
        <section className={classes.modale_cart}>
            <div className={classes.flex_container}>
                <span className={classes.title}>Корзина</span>
                <button className={classes.clear_cart}>Очистить</button>
            </div>
            <div className={classes.items_container}>
                {cart.map((item) => (
                    <ItemCart props={item} key={item.id} remove={removeProduct}/>
                ))}
            </div>
            <div>
                <div className={classes.itog_cost}>
                    <span>Итого:</span>
                    <span>0</span>
                </div>
                <Button>Оформить заказ</Button>
            </div>
        </section>
    );
};

export default ModaleCart;
