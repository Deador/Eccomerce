import React from 'react';
import classes from "./TableHeader.module.css"

const TableHeader = () => {
    return (
        <div className={classes.container}>
            <div className={classes.tab_header_element}>Type ID</div>
            <div className={classes.tab_header_element}>Название</div>
        </div>
    );
};

export default TableHeader;