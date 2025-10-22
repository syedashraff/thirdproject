import React, { useState } from 'react';
import { furnitureData } from '../Data/furniture';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const FurniturePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const modelHandler = (model) => {
        if (selectedProduct.includes(model)) {
            setSelectedProduct(selectedProduct.filter(item => item !== model));
        } else {
            setSelectedProduct([...selectedProduct, model]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? furnitureData
        : furnitureData.filter(phone => selectedProduct.includes(phone.model));

    const uniqueCompanies = [...new Set(furnitureData.map(phone => phone.model))];

    return (
        <>
            <Navbar />
            <div className="fullpage">

                <div className="pro-selected">
                    {uniqueCompanies.map((model) => (
                        <div className='pro-input' key={model}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.includes(model)}
                                    onChange={() => modelHandler(model)}
                                />
                                {model}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/furniture/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt={item.model} />
                                </div>
                            </Link>
                            <div className="proModel">
                                {item.company}, {item.model}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FurniturePage;
