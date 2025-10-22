
import React, { useState } from 'react';
import { computerData } from '../Data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'


const ComputerPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct, company]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? computerData
        : computerData.filter(phone => selectedProduct.includes(phone.company));

    const uniqueCompanies = [...new Set(computerData.map(phone => phone.company))];

    return (
        <>
            <Navbar />
            <div className="fullpage">

                <div className="pro-selected">
                    {uniqueCompanies.map((company) => (
                        <div className='pro-input' key={company}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.includes(company)}
                                    onChange={() => companyHandler(company)}
                                />
                                {company}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/computer/${item.id}`}>
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

export default ComputerPage;
