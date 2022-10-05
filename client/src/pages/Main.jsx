import React, {useEffect, useState} from 'react';
import Header from "../components/header/Header";
import CardList from "../components/card_list/CardList";
import {useSelector} from "react-redux";
import {useSearch} from "../hooks/useSearch";
import GetInfo from "../API/ProductInfo";

function Main() {
    const [search, setSearch] = useState("");
    const cards = useSelector(state => state.getCard.items);

    const response = async () => {
        const test = await GetInfo.getTypes();
        console.log(test.data)
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