import React, {useState} from 'react';
import Header from "../components/Admin/Header/Header";
import ProductTable from "../components/Admin/ProductTable/ProductTable";
import TitleBtn from "../components/Admin/TitleBtn/TitleBtn";
import Form from "../components/Admin/Form/Form";

const AdminTable = () => {
    const [modale, setModale] = useState(false);

    return (
        <div>
            <Header/>
            <TitleBtn setValue={setModale}/>
            <ProductTable/>
            {modale && <Form value={modale} setValue={setModale}/>}
        </div>
    );
};

export default AdminTable;