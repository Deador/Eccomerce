import React from "react";
import classes from "./ModaleCart.module.css";
import ItemCart from "./item_cart/ItemCart";
import {useDispatch, useSelector} from "react-redux";
import {removeItem} from "../../../store/inCart";
import Button from "../../basic/UI/button/Button";
import {useNavigate} from "react-router-dom";

const ModaleCart = () => {
    const dispath = useDispatch();
    const cart = useSelector((state) => state.inCart.products);


    const removeProduct = (item) => {
        dispath(removeItem(item))
    };

    // Отображение корзины
    const cartClasses = [classes.modale_cart];
    if (cart.length > 0) {
        cartClasses.push(classes.active)
    }
    ;

    // const [totalCount, setTotalCount] = useState(0);


    // Обшая стоимость всех товаров в корзине
    // let totalCount = 0;
    // const summation = () => {
    //   cart.forEach((item) => {
    //     const countItem = item.price * item.count;
    //     totalCount += countItem;
    //   });
    // };
    // summation();

    const navigate=useNavigate();

    const goPage = () => {
        return navigate("/cart")
    };


    return (
        <section className={cartClasses.join(" ")}>
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
                {/*<div className={classes.itog_cost}>*/}
                {/*    <span>Итого:</span>*/}
                {/*    <span>0 ₽</span>*/}
                {/*</div>*/}
                <Button onClick={goPage}>В корзину</Button>
            </div>
        </section>
    );
};

export default ModaleCart;
