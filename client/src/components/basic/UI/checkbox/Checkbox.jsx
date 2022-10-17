import React from 'react';
import classes from "./Checkbox.module.css"

const Checkbox = ({label}) => {
    return (
        <div>
            <input type="checkbox" name="checkbox"/>
            <label htmlFor="checkbox" className={classes.label}>{label}</label>
        </div>
    );
};

export default Checkbox;