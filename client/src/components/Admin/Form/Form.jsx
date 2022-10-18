import React, {useEffect, useState} from 'react';
import Title3 from "../../basic/title/Title3";
import ButtonRound from "../UI Admin/Button/ButtonRound";
import classes from "./Form.module.css"
import GetInfo, {crProduct} from "../../../API/ProductInfo";
import Input from "../../basic/UI/Input/Input";
import Select from "../../basic/UI/select/Select";
import {useFetching} from "../../../hooks/useError";

const Form = ({value, setValue}) => {

    const [type, setType] = useState([]);
    const [data, setData] = useState({
        name: "",
        description: "",
        price: 0,
        old_price: 0,
        sale: 0,
        file: null,
        type: []
    });

    // Добавление файла
    const addFile = (e) => {
        setData({...data, file: e.target.files[0]});
    };

    // Создание товара
    const createProduct = () => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("old_price", data.old_price);
        formData.append("typeId", select);
        formData.append("sale", data.sale);
        formData.append("img", data.file);
        crProduct(formData).then(r => console.log("Товар добавлен успешно"));
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

    const [select, setSelect] = useState(1);

    const changeSelect = (sel) => {
        setSelect(sel);
    };

    return (
        <div className={modalClass.join(" ")} onClick={() => setValue(false)}>
            <div className={classes.modalContent} onClick={propagation}>
                <div className={classes.titleModale}><Title3 props="Создать товар"/>
                    <svg className="icon_pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setValue(false)}>
                        <path d="M18 6L6 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <Select defaultValue="Выберите тип" props={type} getSelect={changeSelect} value={select}/>
                <Input placeholder="Введите название" onChange={e => setData({...data, name: e.target.value})}/>
                <Input placeholder="Введите описание" onChange={e => setData({...data, description: e.target.value})}/>
                <Input placeholder="Введите новую цену" onChange={e => setData({...data, price: e.target.value})}/>
                <Input placeholder="Введите старую цену" onChange={e => setData({...data, old_price: e.target.value})}/>
                <Input placeholder="Введите скидку" onChange={e => setData({...data, sale: e.target.value})}/>
                <input type="file" onChange={addFile} className={classes.file}/>
                <ButtonRound onClick={createProduct}>Создать</ButtonRound>
            </div>
        </div>
    );
};

export default Form;