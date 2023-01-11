import React, {useEffect, useState} from 'react';
import {useSearch} from "../hooks/useSearch";
import {getAllProduct} from "../API/ProductInfo";
import Header from "../components/user/header/Header";
import CardList from "../components/user/card_list/CardList";
import {useFetching} from "../hooks/useLoaderError";
import Banner from "../components/user/main_banner/Banner";
import Registration from "../components/user/modales/registration/Registration";
import Auth from "../components/user/modales/auth/Auth";
import Footer from "../components/user/footer/Footer";

function Main() {
    const [search, setSearch] = useState("");

    const [cards, setCards] = useState([]);

    // Состояние для отображения пупапа логина
    const [modale, setModale] = useState(false);

    const [registration, setRegistration] = useState(false)

    const [err, fetching, loader] = useFetching(async () => {
        const response = await getAllProduct();
        setCards(response.data)
    });

    useEffect(() => {
        fetching();
    }, []);

    // Поиск
    const searchProduct = useSearch(cards, search);

    return (
        <div className="App">
            <Header setSearch={setSearch} setModale={setModale}/>
            <Banner/>
            {modale && !registration ? <Auth modale={modale} setModale={setModale} onReg={setRegistration}/> :
                <Registration modale={modale} setModale={setModale} onReg={setRegistration}/>}
            <CardList props={searchProduct}/>
            <Footer/>
        </div>
    );
}

export default Main;