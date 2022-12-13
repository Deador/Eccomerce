import React from 'react';
import classes from "./Registration.module.css"
import Title3 from "../../../basic/title/Title3";
import Input from "../../../basic/UI/Input/Input";
import Button from "../../../basic/UI/button/Button";

const Registration = ({modale, setModale, onReg}) => {
    const cl = [classes.modale]

    if (modale) {
        cl.push(classes.active)
    };

    // При закрытии пупапа переключение обратно на форму входа
    const onLogin = () => {
        setModale(false)
        onReg(false)
    };

    return (
        <div className={cl.join(" ")} onClick={onLogin}>
            <div className={classes.modale_content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modale__title}><Title3 props="Регистрация"/>
                    <svg className="icon_pointer" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg" onClick={onLogin}>
                        <path d="M18 6L6 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <Input placeholder="Введите почту"/>
                <Input placeholder="Введите пароль"/>
                <div>
                    <div onClick={() => onReg(false)}>Есть аккаунт?</div>
                </div>
                <Button>Зарегистрироваться</Button>
            </div>
        </div>
    );
};

export default Registration;