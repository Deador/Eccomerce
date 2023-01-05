import React, {useEffect, useState} from 'react';
import classes from "./EditProduct.module.css";
import Title3 from "../../../basic/title/Title3";
import Select from "../../../basic/UI/select/Select";
import Input from "../../../basic/UI/Input/Input";
import ButtonRound from "../../UI Admin/Button/ButtonRound";
import {useFetching} from "../../../../hooks/useLoaderError";
import GetInfo, {editProduct} from "../../../../API/ProductInfo";

const EditProduct = ({value, setValue, props}) => {
    const [type, setType] = useState([]);
    const [data, setData] = useState({
        id: props.id,
        name: props.name,
        description: props.description,
        price: props.price,
        old_price: props.old_price,
        sale: props.sale,
        file: props.img,
    });

    // Добавление файла
    const addFile = (e) => {
        setData({...data, file: e.target.files[0]});
    };

    // Создание товара
    const editPr = () => {
        const formData = new FormData();
        formData.append("id", data.id);
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("old_price", data.old_price);
        formData.append("typeId", select);
        formData.append("sale", data.sale);
        formData.append("img", data.file);
        editProduct(formData).then(r => console.log("Товар изменен"));
        setValue(false);
    };

    // Модальное окно
    const modalClass = [classes.modal];
    if (value) {
        modalClass.push(classes.active)
    };

    const propagation = (e) => {
        e.stopPropagation();
    };

    //Получение типов
    const [err, fetching, loader] = useFetching(async () => {
        const response = await GetInfo.getTypes();
        setType(response.data)
    });

    useEffect(() => {
        fetching()
    }, []);

    // Изменение типа
    const [select, setSelect] = useState(1);
    const changeSelect = (sel) => {
        setSelect(sel);
    };


    return (
        <div className={modalClass.join(" ")} onClick={() => setValue(false)}>
            <div className={classes.modalContent} onClick={propagation}>
                <div className={classes.titleModale}><Title3 props="Редактировать товар"/>
                    <svg className="icon_pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setValue(false)}>
                        <path d="M18 6L6 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <Select defaultValue="Выберите тип" props={type} getSelect={changeSelect} value={select}/>
                <Input placeholder="Введите название" value={data.name} onChange={e => setData({...data, name: e.target.value})}/>
                <Input placeholder="Введите описание" value={data.description} onChange={e => setData({...data, description: e.target.value})}/>
                <Input placeholder="Введите новую цену" value={data.price} onChange={e => setData({...data, price: e.target.value})}/>
                <Input placeholder="Введите старую цену" value={data.old_price} onChange={e => setData({...data, old_price: e.target.value})}/>
                <Input placeholder="Введите скидку" value={data.sale} onChange={e => setData({...data, sale: e.target.value})}/>
                <input type="file" onChange={addFile} className={classes.file}/>
                <ButtonRound onClick={editPr}>Изменить</ButtonRound>
            </div>
        </div>
    );
};

export default EditProduct;