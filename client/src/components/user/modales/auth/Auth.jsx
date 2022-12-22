import React, {useState} from 'react';
import classes from "./Auth.module.css"
import Title3 from "../../../basic/title/Title3";
import Input from "../../../basic/UI/Input/Input";
import Button from "../../../basic/UI/button/Button";
import {login} from "../../../../API/Login";
import {useDispatch, useSelector} from "react-redux";
import {setAuth, setUser} from "../../../../store/toolkitReducer";

const AuthClient = ({modale, setModale, onReg}) => {
    const cl = [classes.modale];

    if (modale) {
        cl.push(classes.active)
    }
    ;


    const dispath = useDispatch();
    const auth = useSelector(state => state.inCart.auth);
    const user = useSelector(state => state.inCart.userSignIn);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = async () => {
        try {
            const result = await login(email, password);
            dispath(setAuth())
            dispath(setUser(result))
            setModale(false);
        } catch (e) {
            alert(e.message);
        } finally {
            setEmail("");
            setPassword("");
        }
    };

    console.log(user)


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
                <Input value={email} placeholder="Введите почту" onChange={(e) => setEmail(e.target.value)}/>
                <Input value={password} placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)}/>
                <div className={classes.link} onClick={() => onReg(true)}>У вас нет аккаунта?</div>
                <Button onClick={signIn}>Войти</Button>
            </div>
        </div>
    );
};

export default AuthClient;