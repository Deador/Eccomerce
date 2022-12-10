import React from 'react';
import classes from "./Header.module.css";
import ThreeLvl from "./three_lvl/threeLvl";
import OneLvl from "./one_lvl/oneLvlHeader";
import TwoLvl from "./two_lvl/twoLvlHeader";

const Header = ({setSearch}) => {
    return (
        <header className={classes.header}>
            <OneLvl/>
            <TwoLvl setSearch={setSearch}/>
            <ThreeLvl/>
        </header>
    );
};

export default Header;