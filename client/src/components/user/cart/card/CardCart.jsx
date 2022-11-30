import React, {useEffect, useState} from 'react';
import classes from "./CardCart.module.css";
import Counter from "../../counter/Counter";
import {useDispatch} from "react-redux";
import {decrement, increment} from "../../../../store/toolkit/toolkitReducer";


const CardCart = ({props}) => {
    const img = `http://localhost:5000/${props.img}`;

    const [price, setPrice] = useState(0);

    const dispath = useDispatch();
    const inc = () => {
        dispath(increment(props));
    }
    const dec = () => {
        dispath(decrement(props));
    }

    // Подсчет стоимости позиции товара
    const totalPrice = () => {
        setPrice(props.price * props.count);
    }

    useEffect(() => {
        totalPrice();
    }, [props.count]);


    return (
        <div className={classes.container}>
            <div className={classes.card}>
                <img src={img} alt="" className={classes.img}/>
                <div className={classes.title}>{props.name}</div>
                <Counter inc={inc} props={props} dec={dec}/>
                <div className={classes.price}>{price} ₽</div>
                {props.old_price !== 0 && <div className={classes.old_price}>{props.old_price} ₽</div>}
            </div>
        </div>
    );
};

export default CardCart;