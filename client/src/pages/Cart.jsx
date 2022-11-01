import React from 'react';
import Title from "../components/basic/title/Title";
import HeaderCart from "../components/user/header_cart/HeaderCart";

const Cart = () => {
    return (
        <div>
            <HeaderCart/>
            <div className="title_padd">
                <Title props="Корзина товаров"/>
            </div>
        </div>
    );
};

export default Cart;