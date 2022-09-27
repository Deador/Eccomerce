import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import ProductInformation from "../components/ProductInformation";
import {useSelector} from "react-redux";

const InfoProduct = ({props}) => {
    // const cards = useSelector(state => state.getCard.items)
    const params = useParams()

    return (
        <div>
            Продукт {params.id}
            {/*{props.description}*/}
        </div>
    );
};

export default InfoProduct;