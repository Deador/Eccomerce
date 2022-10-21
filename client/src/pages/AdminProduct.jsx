import React, {useState} from 'react';
import Header from "../components/admin/header/Header";
import ProductTable from "../components/admin/productTable/ProductTable";
import TitleBtn from "../components/admin/titleBtn/TitleBtn";
import CreateProduct from "../components/admin/forms/createProduct/CreateProduct";

const AdminProduct = () => {
    const [modale, setModale] = useState(false);

    return (
        <div>
            <Header/>
            <TitleBtn title="Товары" setValue={setModale}/>
            <ProductTable/>
            {modale && <CreateProduct value={modale} setValue={setModale}/>}
        </div>
    );
};

export default AdminProduct;