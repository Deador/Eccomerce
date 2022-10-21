import React, {useContext} from 'react';
import classes from "./Auth.module.css"
import ButtonRound from "../UI Admin/Button/ButtonRound";
import {AuthContext} from "../../../context/context";
import Input from "../../basic/UI/Input/Input";
import Checkbox from "../../basic/UI/checkbox/Checkbox";


const Auth = () => {
    const {auth, setAuth} = useContext(AuthContext)

    const signIn = () => {
        localStorage.setItem("auth", "true")
        setAuth(true);
    }

    return (
        <div className={classes.container}>
            <div className={classes.auth_form}>
                <h2 className={classes.title}>Войти</h2>
                <div className={classes.input_container}>
                    <Input placeholder="Введите логин"/>
                    <Input placeholder="Введите пароль"/>
                </div>
                <div className={classes.checkbox}>
                    <Checkbox label="Запомнить меня"/>
                    <a href="#" className={classes.link}>Забыли пароль?</a>
                </div>
                <ButtonRound onClick={signIn}>Войти</ButtonRound>
            </div>
        </div>
    );
};

export default Auth;