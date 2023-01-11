import React, {useState} from 'react';
import {editType} from "../../../../API/ProductInfo";
import classes from "../createProduct/CreateProduct.module.css";
import Title3 from "../../../basic/title/Title3";
import Input from "../../../basic/UI/Input/Input";
import ButtonRound from "../../UI Admin/Button/ButtonRound";

const EditType = ({value, setValue,props}) => {
    const [data, setData] = useState(props.name);
    const [id,setId]=useState(props.id);

    // Обновление типа
    const editT = async () => {
        const type = await editType(id,data)
        setValue(false)
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
                <div className={classes.titleModale}><Title3 props="Редактировать тип"/>
                    <svg className="icon_pointer" width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setValue(false)}>
                        <path d="M18 6L6 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <Input value={data} placeholder="Введите название" onChange={e => setData(e.target.value)}/>
                <ButtonRound onClick={editT}>Изменить</ButtonRound>
            </div>
        </div>
    );
};

export default EditType;