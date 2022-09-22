import React from 'react';
import classes from "./Header.module.css";
import ThreeLvl from "./three_lvl/threeLvl";
import OneLvl from "./one_lvl/oneLvlHeader";
import TwoLvl from "./two_lvl/twoLvlHeader";
import ModaleCart from "../modale_cart/ModaleCart";
import {useDispatch, useSelector} from "react-redux";

const Header = ({setSearch}) => {
    const dispath = useDispatch();
    const cart = useSelector(state => state.inCart.products);
    return (
        <header className={classes.header}>
            <OneLvl/>
            <TwoLvl setSearch={setSearch}/>
            <ThreeLvl/>
            {cart.length>0&&<ModaleCart/>}
        </header>
    );
};

export default Header;