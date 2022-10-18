import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import GetInfo from "../API/ProductInfo";
import {useFetching} from "../hooks/useError";
import Header from "../components/User/header/Header";
import ProductInformation from "../components/User/ProductInformation";
import Loader from "../components/basic/UI/loader/Loader";

const InfoProduct = () => {

    const params = useParams();
    const [info, setInfo] = useState({});
    // const getProduct = async () => {
    //     const response = await fetch("http://localhost:5000/api/product/" + params.id)
    //     const result = await response.json()
    //     setInfo(result)
    // }

    // Кастомный хук для обработки API и отображения ошибок
    const [err, fetching, loader] = useFetching(async () => {
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
            {loader ? <Loader/> : <ProductInformation info={info}/>}
        </div>
    );
};

export default InfoProduct;