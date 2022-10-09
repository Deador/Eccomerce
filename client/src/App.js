import './App.css';
import {AuthContext} from "./context/context";
import {useState} from "react";
import AppRouting from "./components/AppRouting";


function App() {
    const [auth, setAuth] = useState(false)


    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            <AppRouting/>
        </AuthContext.Provider>
    );
}

export default App;
