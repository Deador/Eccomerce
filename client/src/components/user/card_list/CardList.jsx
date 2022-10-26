import React from 'react';
import Card from "../card/Card";
import classes from "./CardList.module.css"
import {useDispatch} from "react-redux";
import {addInCart} from "../../../store/inCart";
import Title from "../../basic/title/Title";

const CardList = ({props}) => {

    // Добавление продукта в корзину
    const dispath = useDispatch();
    const productInCart = (product) => {
        dispath(addInCart(product));
    };

    return (
        <section className={classes.container}>
        <Title props="Сейчас популярно"/>
        <div className={classes.row}>
            {props.map(item =><Card props={item} key={item.id} product={productInCart}/>)}
        </div>
        </section>
    );
};

export default CardList;