import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import {crProduct} from "../../API/ProductInfo";
import classes from "./Form.module.css";
import Title3 from "../basic/title/Title3";
import ButtonRound from "../Admin/UI Admin/Button/ButtonRound";

const Form = ({value, setValue}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [old_price, setOldPrice] = useState(0);
    const [sale, setSale] = useState(0);
    const [file, setFile] = useState(null);

    const addFile = (e) => {
        setFile(e.target.files[0]);
    };

    const createProduct = () => {
        const formData = new FormData();
        formData.append("name", name)
        formData.append("description", description)
        formData.append("price", price)
        formData.append("old_price", old_price)
        formData.append("typeId", 1)
        // form.append("sale", setSale)
        formData.append("img", file)
        crProduct(formData).then(r => console.log("Товар добавлен успешно"))
    };

    // Модальное окно
    const modalClass = [classes.modal];
    if (value) {
        modalClass.push(classes.active)
    };

    const propagation = (e) => {
        e.stopPropagation();
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
                <Input placeholder="Введите название" onChange={e => setName(e.target.value)}/>
                <Input placeholder="Введите описание" onChange={e => setDescription(e.target.value)}/>
                <Input placeholder="Введите новую цену" onChange={e => setPrice(e.target.value)}/>
                <Input placeholder="Введите старую цену" onChange={e => setOldPrice(e.target.value)}/>
                <Input placeholder="Введите скидку" onChange={e => setSale(e.target.value)}/>
                <input type="file" onChange={addFile} className={classes.file}/>
                <ButtonRound onClick={createProduct}>Создать</ButtonRound>
            </div>
        </div>
    );
};

export default Form;