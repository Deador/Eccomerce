import React from 'react';
import classes from "./itemCart.module.css"

const ItemCart = ({props, remove}) => {
    const IMG = `http://localhost:5000/${props.img}`;

    return (
        <div className={classes.cart_item}>
            <div className={classes.content}>
                <img
                    src={IMG}
                    width="80px"
                    alt=""
                    className="img_item"
                />
                <div className={classes.description}>
                    {props.name}
                </div>
            </div>
            <div className={classes.content}>
                <div className={classes.price}>{props.price} ₽</div>
                <img onClick={()=>remove(props)}
                    src="/source/icons/icons_menu/Trash_light.svg"
                    alt=""
                    className="clear_icon"
                    />
            </div>
        </div>
    );
};

export default ItemCart;