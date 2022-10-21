import React from 'react';
import classes from "./Button.module.css"

const ButtonRound = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn}>{children}</button>
    );
};

export default ButtonRound;