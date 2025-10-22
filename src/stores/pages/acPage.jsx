import React, { useState } from 'react';
import { acData } from "../Data/ac";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// const acPage = () => {
//   return (
//      <>
//     <Navbar/>
//     <div className="PageSection">
//       {acData.map((item, index) => (
//         <div key={index}>

//               <Link to={`/ac/${item.id}`}>
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

// export default acPage

const acPage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct, company]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? acData
        : acData.filter(phone => selectedProduct.includes(phone.company));

    const uniqueCompanies = [...new Set(acData.map(phone => phone.company))];

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
                            <Link to={`/ac/${item.id}`}>
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

export default acPage;
