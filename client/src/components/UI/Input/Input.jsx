import React from 'react';
import classes from "./Input.module.css"

const Input = (props) => {
    return (
        <div>
            <input {...props} type="text" className={classes.input}/>
        </div>
    );
};

export default Input;