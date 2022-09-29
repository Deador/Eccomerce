import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import InfoProduct from "./pages/InfoProduct";
import PageError from "./pages/PageError";
import {useSelector} from "react-redux";


function App() {
    const cards = useSelector(state => state.getCard.items)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}></Route>
                {cards.map(item => <Route path="products/:id" element={<InfoProduct props={item}/>}></Route>)}
                <Route path="*" element={<PageError/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
