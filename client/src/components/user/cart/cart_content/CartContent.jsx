import React from 'react';
import CardCartList from "../card_list/CardCartList";
import ItogPrice from "../itog_price/ItogPrice";
import classes from "./cart_content.module.css";

const CartContent = () => {
    return (
        <div className={classes.container}>
            <CardCartList/>
            <ItogPrice/>
        </div>
    );
};

export default CartContent;