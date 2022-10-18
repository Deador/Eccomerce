import React from 'react';
import classes from "./itemCart.module.css"

const ItemCart = ({props, remove}) => {
    // const price=props.count*props.price;

    return (
        <div className={classes.cart_item} onClick={()=>remove(props)}>
            <h1>{props.count}</h1>
            <div className={classes.content}>
                <img
                    src={props.img}
                    width="80px"
                    alt=""
                    className="img_item"
                />
                <div className={classes.description}>
                    {props.description}
                </div>
            </div>
            <div className={classes.content}>
                <span className={classes.price}>{props.price} ₽</span>
                <img
                     src="/source/icons/icons_menu/Trash_light.svg"
                     alt=""
                     className="clear_icon"
                />
            </div>
        </div>
    );
};

export default ItemCart;