import React from 'react';
import classes from "./TableHeader2.module.css"

const TableHeader2 = () => {
    return (
        <div className={classes.container}>
            <div className={classes.tab_header_element}>Карт.</div>
            <div className={classes.tab_header_element}>Название</div>
            <div className={classes.tab_header_element}>Описание</div>
            <div className={classes.tab_header_element}>Тип</div>
            <div className={classes.tab_header_element}>Цена</div>
            <div className={classes.tab_header_element}>Старая цена</div>
            <div className={classes.tab_header_element}>Скидка</div>
        </div>
    );
};

export default TableHeader2;