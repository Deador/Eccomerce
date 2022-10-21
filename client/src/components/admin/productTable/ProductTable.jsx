import React, {useEffect, useState} from 'react';
import classes from "./ProductTable.module.css";
import Row from "./row/Row";
import {useFetching} from "../../../hooks/useLoaderError";
import GetInfo, {getAllProduct} from "../../../API/ProductInfo";
import TableHeader from "./tableHeader/TableHeader";
import Loader from "../../basic/UI/loader/Loader";
import Title3 from "../../basic/title/Title3";

const ProductTable = () => {

    // Получение товаров по API
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    const [err, fetching, loader] =
        useFetching(async () => {
            const response = await getAllProduct();
            setData(response.data);
            const types = await GetInfo.getTypes();
            setType(types.data)
        });

    useEffect(() => {
        fetching();
    }, []);


    return (
        <div className={classes.container}>
            <TableHeader/>
            {err && <Title3>{err}</Title3>}
            {loader ? <Loader/> : data.map(element => <Row props={element} key={element.name}/>)}
        </div>
    );
};

export default ProductTable;