import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import ProductInformation from "../components/ProductInformation";
import {useSelector} from "react-redux";
import Header from "../components/header/Header";
import GetInfo from "../API/ProductInfo";
import {useFetching} from "../hooks/useError";

const InfoProduct = () => {

    const params = useParams();
    const [info, setInfo] = useState({});
    // const getProduct = async () => {
    //     const response = await fetch("http://localhost:5000/api/product/" + params.id)
    //     const result = await response.json()
    //     setInfo(result)
    // }

    // Кастомный хук для обработки API и отображения ошибок
    const [err, fetching] = useFetching(async () => {
            const response = await GetInfo.getPageProduct(params.id)
            setInfo(response.data)
        }
    );

    useEffect(() => {
        fetching()
    }, []);

    return (
        <div>
            <Header/>
            {err && <h1>{err}</h1>}
            <ProductInformation info={info}/>
        </div>
    );
};

export default InfoProduct;