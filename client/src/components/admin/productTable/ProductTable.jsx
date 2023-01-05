import React, {useEffect, useState} from 'react';
import classes from "./ProductTable.module.css";
import Row from "./row/Row";
import {useFetching} from "../../../hooks/useLoaderError";
import GetInfo, {deleteProduct, getAllProduct} from "../../../API/ProductInfo";
import TableHeader from "./tableHeader/TableHeader";
import Loader from "../../basic/UI/loader/Loader";
import Title3 from "../../basic/title/Title3";
import EditProduct from "../forms/editProduct/EditProduct";

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

    const deletePr = async (id) => {
        const product = await deleteProduct(id)
    }

    //Состояние для модалки редактирования товара
    const [modale, setModale] = useState(false);

    // Состояние для получения инфы из конкретной строки для подставления в input
    const [dataRow, setDataRow]=useState({})


    return (
        <div className={classes.container}>
            <TableHeader/>
            {err && <Title3>{err}</Title3>}
            {loader ? <Loader/> : data.map(element => <Row props={element} key={element.name} deleteProduct={deletePr} modale={modale} setModale={setModale} setDataRow={setDataRow}/>)}
            {modale&&<EditProduct value={modale} setValue={setModale} props={dataRow}/>}
        </div>
    );
};

export default ProductTable;