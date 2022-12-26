import React from 'react';
import classes from "./Menu.module.css";
import {useDispatch} from "react-redux";
import {setUser, userAuth} from "../../../store/toolkitReducer";

const Menu = () => {
    const dispath = useDispatch();

    const logOut = (e) => {
        dispath(userAuth(false));
        dispath(setUser({}));
        e.stopPropagation();
        localStorage.removeItem("token");
    }

    return (
        <div className={classes.menu}>
            <div className={classes.container}>
                <div className={classes.menu__item}>Профиль</div>
                <div className={classes.menu__item}>Избранное</div>
                <div className={classes.menu__item}>Мои заказы</div>
                <div className={classes.menu__item} onClick={logOut}>Выход</div>
            </div>
        </div>
    );
};

export default Menu;