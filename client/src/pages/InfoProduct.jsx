import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import GetInfo from "../API/ProductInfo";
import {useFetching} from "../hooks/useLoaderError";
import Header from "../components/user/header/Header";
import Loader from "../components/basic/UI/loader/Loader";
import ProductInformation from "../components/user/productInfo/ProductInformation";

const InfoProduct = () => {

    const params = useParams();
    const [info, setInfo] = useState({});

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