import React, {useEffect, useState} from 'react';
import TableHeader from "./TableHeader/TableHeader";
import classes from "./ProductTable.module.css";
import Row from "./Row/Row";
import {useFetching} from "../../../hooks/useError";
import {getAllProduct} from "../../../API/ProductInfo";
import TableHeader2 from "./TableHeader2/TableHeader2";

const ProductTable = () => {
    const [data, setData] = useState([])
    const [err, fetching] =
        useFetching(async () => {
                const response = await getAllProduct();
                setData(response.data)
            }
        )

    useEffect(() => {
        fetching();
    }, [])


    return (
        <div className={classes.container}>
            <TableHeader2/>
            {/*<Row/>*/}
            {data.map(element => <Row props={element}/>)}
        </div>
    );
};

export default ProductTable;