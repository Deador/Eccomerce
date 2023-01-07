import React from 'react';
import classes from "./Header.module.css";
import ThreeLvl from "./three_lvl/threeLvl";
import OneLvl from "./one_lvl/oneLvlHeader";
import TwoLvl from "./two_lvl/twoLvlHeader";
import {useSelector} from "react-redux";

const Header = ({setSearch, setModale}) => {
    const user = useSelector(state => state.inCart.userSignIn);
    const auth = useSelector(state => state.inCart.auth);

    return (
        <header className={classes.header}>
            <OneLvl user={user} auth={auth}/>
            <TwoLvl setSearch={setSearch} setModale={setModale} user={user} auth={auth}/>
            <ThreeLvl/>
        </header>
    );
};

export default Header;