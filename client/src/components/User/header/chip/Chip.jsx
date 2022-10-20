import React from 'react';
import classes from "./Chip.module.css";

const Chip = ({count}) => {

    return (
        <div className={classes.chip}>
            {count}
        </div>
    );
};

export default Chip;