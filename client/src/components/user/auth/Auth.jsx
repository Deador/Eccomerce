import React from 'react';
import classes from "./Auth.module.css"
import Title3 from "../../basic/title/Title3";
import Input from "../../basic/UI/Input/Input";
import Button from "../../basic/UI/button/Button";
import {Link} from "react-router-dom";

const AuthClient = ({modale, setModale}) => {
    const cl = [classes.modale]

    if (modale) {
        cl.push(classes.active)
    }
    ;

    return (
        <div className={cl.join(" ")} onClick={() => setModale(false)}>
            <div className={classes.modale_content} onClick={(e) => e.stopPropagation()}>
                <div className={classes.modale__title}><Title3 props="Войти"/>
                    <svg className="icon_pointer" width="24" height="24" viewBox="0 0 24 24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg" onClick={() => setModale(false)}>
                        <path d="M18 6L6 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                        <path d="M6 6L18 18" stroke="#222529" strokeWidth="1.5" strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </div>
                <Input placeholder="Введите почту"/>
                <Input placeholder="Введите пароль"/>
                <div>
                    <Link to="/registration">У вас нет аккаунта?</Link>
                </div>
                <Button>Войти</Button>
            </div>
        </div>
    );
};

export default AuthClient;