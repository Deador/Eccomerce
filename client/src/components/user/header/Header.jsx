import React from 'react';
import classes from "./Header.module.css";
import ThreeLvl from "./three_lvl/threeLvl";
import OneLvl from "./one_lvl/oneLvlHeader";
import TwoLvl from "./two_lvl/twoLvlHeader";
import Menu from "../menu/Menu";

const Header = ({setSearch,setModale}) => {
    return (
        <header className={classes.header}>
            <OneLvl/>
            <TwoLvl setSearch={setSearch} setModale={setModale}/>
            <ThreeLvl/>
            <Menu/>
        </header>
    );
};

export default Header;