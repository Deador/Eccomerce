import React, {useEffect, useState} from 'react';
import classes from "./TypeTable.module.css";
import Row from "./row/Row";
import {useFetching} from "../../../hooks/useLoaderError";
import GetInfo, {deleteType, editType} from "../../../API/ProductInfo";
import TableHeader from "./tableHeader/TableHeader";
import Loader from "../../basic/UI/loader/Loader";
import Title3 from "../../basic/title/Title3";
import EditType from "../forms/editType/EditType";

const TypeTable = () => {
    //Состояние для модалки редактирования товара
    const [modale, setModale] = useState(false);

    // Получение типов по API
    const [type, setType] = useState([]);
    const [err, fetching, loader] =
        useFetching(async () => {
            const types = await GetInfo.getTypes();
            setType(types.data)
        });

    useEffect(() => {
        fetching();
    }, []);

    // Удаление типов
    const deleteTyp = async (id) => {
        const type = await deleteType(id);
    };

    // Состояние для получения инфы из конкретной строки для подставления в input
    const [dataRow, setDataRow] = useState({});


    return (
        <div className={classes.container}>
            <TableHeader/>
            {err && <Title3>{err}</Title3>}
            {loader ? <Loader/> : type.map(element => <Row props={element} key={element.id} deleteType={deleteTyp}
                                                            setDataRow={setDataRow} setModale={setModale}/>)}
            {modale&&<EditType value={modale} setValue={setModale} props={dataRow}/>}
        </div>
    );
};

export default TypeTable;