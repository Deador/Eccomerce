import React from 'react';
import Title from "../components/basic/title/Title";
import HeaderCart from "../components/user/header_cart/HeaderCart";
import CartContent from "../components/user/cart/cart_content/CartContent";

const Cart = () => {
    return (
        <div>
            <HeaderCart/>
            <div className="title_padd">
                <Title props="Корзина"/>
                <CartContent/>
            </div>
        </div>
    );
};

export default Cart;