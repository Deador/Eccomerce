import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userAuth} from "../store/toolkitReducer";
import Button from "../components/basic/UI/button/Button";

const Test = () => {
    const dispath = useDispatch();
    const auth = useSelector(state => state.inCart.auth);

    const click = () => {
        dispath(userAuth(true));
    }

    const logout = () => {
        dispath(userAuth(false));
    }

    console.log(auth)
    return (
        <div>
            <h1 style={{marginBottom: 40}}>Регистрация</h1>
            <Button onClick={click}>Войти</Button>
            <Button onClick={logout}>Выйти</Button>
        </div>
    );
};

export default Test;