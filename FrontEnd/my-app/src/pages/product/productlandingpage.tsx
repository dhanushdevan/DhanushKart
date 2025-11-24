import React from 'react';
import { useNavigate } from 'react-router-dom';
import jsondata from '../../Data/product.json';
import Header from '../../component/header/header';
import './productlandingpage.css';

function ProductLandingPage() {
    const navigate = useNavigate();
    return (
        <>
        <div className="product-grid">
        {jsondata.phones.map((phone) => (
            <div key={phone.id} className="product-card">
                <img src={phone.image_url} alt={phone.name} />
                <div>
                  <h2>{phone.name}</h2>
                  <p>{phone.description}</p>
                </div>
                <button onClick={() => navigate(`/product/${phone.id}`)}>
                    Shop Now
                </button>
            </div>
        ))
        }</div>
        </>
    )
};
export default ProductLandingPage;