

import React, { useState } from 'react';
import { booksData } from '../Data/books';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';

// const booksPage = () => {
//   return (
//       <>
//     <Navbar/>
//     <div className="PageSection">
//       {booksData.map((item, index) => (
//         <div key={index}>
//            <Link to={`/books/${item.id}`}>
//           <div className="pageImg">
//             <img src={item.image} alt={`${item.company} ${item.model}`} />
//           </div>
//           </Link>

//           <div className="proModel">
//             {item.company}, {item.model}
//           </div>
//         </div>
//       ))}
//     </div>
//     </>
    
   
//   )
// }

// export default booksPage


const booksPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const titleHandler = (title) => {
        if (selectedProduct.includes(title)) {
            setSelectedProduct(selectedProduct.filter(item => item !== title));
        } else {
            setSelectedProduct([...selectedProduct, title]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? booksData
        : booksData.filter(phone => selectedProduct.includes(phone.title));

    const uniqueCompanies = [...new Set(booksData.map(phone => phone.title))];

    return (
        <>
            <Navbar />
            <div className="fullpage">

                <div className="pro-selected">
                    {uniqueCompanies.map((title) => (
                        <div className='pro-input' key={title}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={selectedProduct.includes(title)}
                                    onChange={() => titleHandler(title)}
                                />
                                {title}
                            </label>
                        </div>
                    ))}
                </div>

                <div className='pageSection'>
                    {filteredProduct.map((item) => (
                        <div key={item.id}>
                            <Link to={`/books/${item.id}`}>
                                <div className="pageImg">
                                    <img src={item.image} alt={item.model} />
                                </div>
                            </Link>
                            <div className="proModel">
                                {item.title}, {item.model}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default booksPage;
