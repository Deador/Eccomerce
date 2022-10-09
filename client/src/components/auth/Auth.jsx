import React, {useContext} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import classes from "./Auth.module.css"
import {AuthContext} from "../../context/context";

const Auth = () => {
    const {auth, setAuth} = useContext(AuthContext)

    const signIn = () => {
        localStorage.setItem("auth", "true")
        setAuth(true);
    }

    return (
        <div className="">
            <h1>Вход</h1>
            <Input placeholder="Введите логин"/>
            <Input placeholder="Введите пароль"/>
            <Button onClick={signIn}>Войти</Button>
        </div>
    );
};

export default Auth;