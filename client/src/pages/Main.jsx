import React, {useEffect, useState} from 'react';
import {useSearch} from "../hooks/useSearch";
import {getAllProduct} from "../API/ProductInfo";
import Header from "../components/user/header/Header";
import CardList from "../components/user/card_list/CardList";
import {useFetching} from "../hooks/useLoaderError";

function Main() {
    const [search, setSearch] = useState("");
    // const cards = useSelector(state => state.getCard.items);

    const [cards, setCards] = useState([]);

    const [err, fetching, loader] = useFetching(async () => {
        const response = await getAllProduct();
        setCards(response.data)
    });

    useEffect(() => {
        fetching()
    }, []);

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