import React, {useState} from 'react';
import classes from "./Registration.module.css"
import Title3 from "../../../basic/title/Title3";
import Input from "../../../basic/UI/Input/Input";
import Button from "../../../basic/UI/button/Button";
import {registration} from "../../../../API/Login";

const Registration = ({modale, setModale, onReg}) => {
    const cl = [classes.modale]

    if (modale) {
        cl.push(classes.active)
    }
    ;

    // При закрытии пупапа переключение обратно на форму входа
    const onLogin = () => {
        setModale(false);
        onReg(false);
    };

    // Регистрация нового пользователя
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const createUser = async () => {
        try {
            const response = await registration(email, password);
        } catch (e) {
            alert(e.response.data.message)
        } finally {
            setEmail("");
            setPassword("");
        }
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
                <Input placeholder="Введите почту" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <Input placeholder="Введите пароль"
                       onChange={(e) => setPassword(e.target.value)} value={password}/>
                <div className={classes.link} onClick={() => onReg(false)}>Есть аккаунт?</div>
                <Button onClick={createUser}>Зарегистрироваться</Button>
            </div>

        </div>
    );
};

export default Registration;