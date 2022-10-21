import React, {useState} from 'react';
import Header from "../components/admin/header/Header";
import TitleBtn from "../components/admin/titleBtn/TitleBtn";
import TypeTable from "../components/admin/typeTable/TypeTable";
import CreateType from "../components/admin/forms/createType/CreateType";

const AdminType = () => {
    const [modale, setModale] = useState(false);
    return (
        <div>
            <Header/>
            <TitleBtn title="Типы" setValue={setModale}/>
            <TypeTable/>
            {modale && <CreateType value={modale} setValue={setModale}/>}
        </div>
    );
};

export default AdminType;