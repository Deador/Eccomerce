import React, {useEffect, useState} from 'react';
import classes from "./TypeTable.module.css";
import Row from "./row/Row";
import {useFetching} from "../../../hooks/useLoaderError";
import GetInfo from "../../../API/ProductInfo";
import TableHeader from "./tableHeader/TableHeader";
import Loader from "../../basic/UI/loader/Loader";
import Title3 from "../../basic/title/Title3";

const TypeTable = () => {

    // Получение товаров по API
    const [type, setType] = useState([]);
    const [err, fetching, loader] =
        useFetching(async () => {
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
            {loader ? <Loader/> : type.map(element => <Row props={element} key={element.id}/>)}
        </div>
    );
};

export default TypeTable;