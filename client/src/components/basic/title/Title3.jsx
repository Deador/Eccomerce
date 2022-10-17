import React from 'react';
import classes from "./Title.module.css";

const Title3 = ({props}) => {
    return (
        <h3 className={classes.h3}>{props}</h3>
    );
};

export default Title3;