import React from 'react';
import {useSelector} from "react-redux";
import CardCart from "../card/CardCart";

const CardCartList = () => {
    const cart = useSelector((state) => state.inCart.products);

    return (
        <div>
            {cart.map(element => <CardCart props={element}/>)}
        </div>
    );
};

export default CardCartList;