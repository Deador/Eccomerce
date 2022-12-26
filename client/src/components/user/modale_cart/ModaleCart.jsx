import React from "react";
import classes from "./ModaleCart.module.css";
import ItemCart from "./item_cart/ItemCart";
import {useDispatch, useSelector} from "react-redux";
import Button from "../../basic/UI/button/Button";
import {useNavigate} from "react-router-dom";
import {removeItem} from "../../../store/toolkitReducer";

const ModaleCart = () => {
    const dispath = useDispatch();
    const cart = useSelector((state) => state.inCart.products);


    const removeProduct = (product) => {
        dispath(removeItem(product))
    };

    // Отображение корзины
    const cartClasses = [classes.modale_cart];
    if (cart.length > 0) {
        cartClasses.push(classes.active)
    };

    const navigate=useNavigate();

    const goPage = () => {
        return navigate("/cart")
    };


    return (
        <section className={cartClasses.join(" ")}>
            <div className={classes.flex_container}>
                <div className={classes.title}>Корзина</div>
                <button className={classes.clear_cart}>Очистить</button>
            </div>
            <div className={classes.items_container}>
                {cart.map((item) => (
                    <ItemCart props={item} key={item.id} remove={removeProduct}/>
                ))}
            </div>
            <div className={classes.btn__container}>
                <Button onClick={goPage}>В корзину</Button>
            </div>
        </section>
    );
};

export default ModaleCart;
