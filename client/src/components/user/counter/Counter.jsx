import React from 'react';
import classes from "./Counter.module.css"

const Counter = ({inc, props, dec}) => {
    return (
        <div className={classes.counter}>
            <div className={classes.count_btn} onClick={inc}>+</div>
            <div className={classes.quantity}>{props.count}</div>
            <div className={classes.count_btn} onClick={dec}>-</div>
        </div>
    );
};

export default Counter;