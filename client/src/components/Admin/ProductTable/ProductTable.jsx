import React, {useEffect, useState} from 'react';
import classes from "./ProductTable.module.css";
import Row from "./Row/Row";
import {useFetching} from "../../../hooks/useError";
import GetInfo, {getAllProduct} from "../../../API/ProductInfo";
import TableHeader2 from "./TableHeader2/TableHeader2";
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
            <TableHeader2/>
            {err && <Title3>{err}</Title3>}
            {loader ? <Loader/> : data.map(element => <Row props={element} key={element.name}/>)}
        </div>
    );
};

export default ProductTable;