import React from 'react';

const ProductInformation = ({info}) => {
    return (
        <div>
            <h2 style={{marginTop: 64}}>{info.name}</h2>
            <div style={{marginTop: 24}}>{info.description}</div>
        </div>
    );
};

export default ProductInformation;