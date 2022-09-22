import './App.css';
import Header from "./components/header/Header";
import CardList from "./components/card_list/CardList";
import {useMemo, useState} from "react";
import {useSelector} from "react-redux";
import {useSearch} from "./hooks/useSearch";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";


function App() {
    // const [search, setSearch] = useState("");
    // const cards = useSelector(state => state.getCard.items)
    //
    // // Поиск
    // const searchProduct = useSearch(cards, search);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
            </Routes>
            {/*<div className="App">*/}
            {/*    <Header setSearch={setSearch}/>*/}
            {/*    <CardList props={searchProduct}/>*/}
            {/*</div>*/}
        </BrowserRouter>
    );
}

export default App;
