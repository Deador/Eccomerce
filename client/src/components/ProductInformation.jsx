import React from 'react';
import {useSelector} from "react-redux";

const ProductInformation = ({props}) => {
    return (
        <div>
            {props.description}
        </div>
    );
};

export default ProductInformation;