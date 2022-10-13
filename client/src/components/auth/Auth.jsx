import React, {useContext} from 'react';
import Input from "../UI/Input/Input";
import classes from "./Auth.module.css"
import {AuthContext} from "../../context/context";
import Checkbox from "../UI/checkbox/Checkbox";
import ButtonRound from "../Admin/UI Admin/Button/ButtonRound";

const Auth = () => {
    const {auth, setAuth} = useContext(AuthContext)

    const signIn = () => {
        localStorage.setItem("auth", "true")
        setAuth(true);
    }
    // localStorage.clear()

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