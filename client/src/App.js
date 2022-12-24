import './App.css';
import {AuthContext} from "./context/context";
import {useEffect, useState} from "react";
import AppRouting from "./components/AppRouting";
import {check} from "./API/Login";
import {useDispatch, useSelector} from "react-redux";
import {setUser, userAuth} from "./store/toolkitReducer";
import Loader from "./components/basic/UI/loader/Loader";


function App() {
    const [auth, setAuth] = useState(false);

    const [loading, setLoading] = useState(true);

    const dispath = useDispatch();

    const test=useSelector(state => state.inCart.auth)

    // При перезагрузки страницы, стадия монтирования, вызывается функция check, которая отправляет на бэк jwt токен для проверки его валидности
    useEffect(() => {
        check().then(data => {
            dispath(userAuth(true));
            dispath(setUser(data))
        }).finally(() => setLoading(false))
    }, [test]);

    if (loading) {
        return <Loader/>
    }



    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            <AppRouting/>
        </AuthContext.Provider>
    );
}

export default App;
