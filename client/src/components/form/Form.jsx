import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import {crProduct} from "../../API/ProductInfo";
import classes from "./Form.module.css";

const Form = ({value, setvalue}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [old_price, setOldPrice] = useState(0);
    const [sale, setSale] = useState(0);
    const [file, setFile] = useState(null);

    // Модальное окно
    const modaleClass = [classes.modale];
    if (value) {
        modaleClass.push(classes.active)
    }

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
    }


    return (
        <div className={modaleClass.join("")}>
            <div className={classes.modaleContent}>
                <h2>Создание нового товара</h2>
                <Input placeholder="Введите название" onChange={e => setName(e.target.value)}/>
                <Input placeholder="Введите описание" onChange={e => setDescription(e.target.value)}/>
                <Input placeholder="Введите новую цену" onChange={e => setPrice(e.target.value)}/>
                <Input placeholder="Введите старую цену" onChange={e => setOldPrice(e.target.value)}/>
                <Input placeholder="Введите скидку" onChange={e => setSale(e.target.value)}/>
                <input type="file" onChange={addFile}/>
                <Button onClick={createProduct}>Создать</Button>
            </div>
        </div>
    );
};

export default Form;