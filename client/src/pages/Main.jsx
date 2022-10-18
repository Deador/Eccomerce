import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useSearch} from "../hooks/useSearch";
import GetInfo from "../API/ProductInfo";
import Header from "../components/User/header/Header";
import CardList from "../components/User/card_list/CardList";

function Main() {
    const [search, setSearch] = useState("");
    const cards = useSelector(state => state.getCard.items);

    const response = async () => {
        const test = await GetInfo.getTypes();
    }

    useEffect(() => {
        response()
    }, [])

    // Поиск
    const searchProduct = useSearch(cards, search);

    return (
        <div className="App">
            <Header setSearch={setSearch}/>
            <CardList props={searchProduct}/>
        </div>
    );
}

export default Main;