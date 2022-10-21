import React, {useState} from 'react';
import {crType} from "../../../../API/ProductInfo";
import classes from "../createProduct/CreateProduct.module.css";
import Title3 from "../../../basic/title/Title3";
import Input from "../../../basic/UI/Input/Input";
import ButtonRound from "../../UI Admin/Button/ButtonRound";

const CreateType = ({value, setValue}) => {
    const [data, setData] = useState("");

    const createType = () => {
        const formData = new FormData();
        formData.append("name", data)
        crType(formData).then(() => console.log("Тип добавлен")).catch(() => console.log("Ошибка"));
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

    return (
        <div className={modalClass.join(" ")} onClick={() => setValue(false)}>
            <div className={classes.modalContent} onClick={propagation}>
                <div className={classes.titleModale}><Title3 props="Создать тип"/>
                    <svg className="icon_pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setValue(false)}>
                        <path d="M18 6L6 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <Input placeholder="Введите название" onChange={e => setData(e.target.value)}/>
                <ButtonRound onClick={createType}>Создать</ButtonRound>
            </div>
        </div>
    );
};

export default CreateType;