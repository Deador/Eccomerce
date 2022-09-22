import React from 'react';
import classes from "./threeLvl.module.css"

const ThreeLvl = () => {
    return (
        <div className={classes.three_lvl}>
                <a href="" className={classes.item_catalog}>Настольные игры</a>
                <a href="" className={classes.item_catalog}>Игрушки</a>
                <a href="" className={classes.item_catalog}>Хобби и творчество</a>
                <a href="" className={classes.item_catalog}>Книги и комиксы</a>
                <a href="" className={classes.item_catalog}>Дом и аксессуары</a>
                <a href="" className={classes.item_catalog}>Подарки</a>
                <a href="" className={classes.item_catalog}>Новинки</a>
                <a href="" className={classes.item_catalog}>Лидеры продаж</a>
        </div>
    );
};

export default ThreeLvl;