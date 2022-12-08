import React, {useState} from 'react';
import classes from "./Card.module.css"
import {useNavigate} from "react-router-dom";

const Card = ({props, product}) => {
    const navigate = useNavigate();
    const IMG = `http://localhost:5000/${props.img}`;
    const [active, setActive] = useState(false);

    const addProduct = (e) => {
        e.stopPropagation();
        product(
            {
                ...props, count: 1
            });
        setActive(true);
    };

    const redirectInCart = (e) => {
        e.stopPropagation();
        return navigate("/cart")
    };


    return (
        <div className={classes.card_item} onClick={() => navigate(`/products/${props.id}`)}>
            <img
                src={IMG}
                alt="Image"
            />
            {props.sale !== 0 &&
                <div className={classes.sale}><div className={classes.number_sale}>-{props.sale}%</div></div>}
            <div className={classes.card_text_container}>
                <div className={classes.price_text}>
                  <div className={classes.price_card}>{props.price} ₽</div
                  >{props.old_price !== 0 && <div className={classes.sale_card}>{props.old_price} ₽</div>}
                </div>
                <div className={classes.card_description}>
                    {props.name}
                </div>
            </div>
            <div className={classes.bottom_nav}>
                {active ? <button className={classes.active} onClick={redirectInCart}>В корзине</button> :
                    <button className={classes.btn_cart} onClick={addProduct}>В корзину</button>}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M14.584 2.5C12.2923 2.5 11.0382 3.6975 10.0007 4.75C8.96315 3.6975 7.70898 2.5 5.41732 2.5C2.36148 2.5 0.833984 5.05917 0.833984 7.75C0.833984 12.2808 6.18148 16 10.0007 17.5C13.8198 16 19.1673 12.2808 19.1673 7.75C19.1673 5.05917 17.6398 2.5 14.584 2.5Z"
                          stroke="#7D26DC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    );
};

export default Card;