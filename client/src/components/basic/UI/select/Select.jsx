import React from 'react';
import classes from "../Input/Input.module.css"

const Select = ({props, defaultValue, getSelect, value}) => {
    return (
        <div className={classes.input}>
            <select value={value} onChange={(e) => getSelect(e.target.value)}>
                <option disabled value="">{defaultValue}</option>
                {props.map(element => <option key={element.id} value={element.id}>{element.name}</option>)}
            </select>
        </div>
    );
};

export default Select;