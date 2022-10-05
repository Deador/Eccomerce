import React from 'react';
import Input from "../UI/Input/Input";

const Form = () => {
    return (
        <div>
            <Input placeholder="Введите название"/>
            <Input placeholder="Введите описание"/>
            <Input placeholder="Введите новую цену"/>
            <Input placeholder="Введите старую цену"/>

            <h2>Описание товара</h2>
            <Input placeholder="Введите название свойства"/>
            <Input placeholder="Введите описание свойства"/>
        </div>
    );
};

export default Form;