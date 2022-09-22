import React from 'react';
import Card from "../card/Card";
import classes from "./CardList.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addInCart} from "../../store/inCart";

const CardList = ({props}) => {

    // Добавление продукта в корзину
    const dispath = useDispatch();
    const productInCart = (product) => {
        dispath(addInCart(product));
    }

    return (
        <section className={classes.row}>
            {props.map(item => <Card props={item} key={item.id} product={productInCart}/>)}
        </section>
    );
};

export default CardList;