import React from 'react';
import classes from "./itemCart.module.css"

const ItemCart = ({props, remove}) => {

    // const [price, setPrice] = useState(0)
    //
    // // Подсчет стоимости
    // const multiplication = () => {
    //     const summ = props.price * props.count;
    //     setPrice(summ);
    // };
    //
    //
    // useEffect(() => {
    //     multiplication();
    // }, [props.count]);

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
                <span className={classes.price}>{props.price} ₽</span>
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