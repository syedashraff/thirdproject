// import React, { useState } from 'react';
// import { mobileData } from '../Data/mobiles';
// import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';

// // 
// const MobilePage = () => {

//     const [selectedProduct, setSelectedProduct] = useState([])

//     const companyHandler=(mango)=>{
//             if(selectedProduct.includes(mango)){
//                 setSelectedProduct(selectedProduct.filter(item => item !== mango))
//             }else{
//                 setSelectedProduct([...selectedProduct, mango]) 
//             }
//     }


//     const filteredProduct = selectedProduct.length===0?
//         mobileData : mobileData.filter((orange)=>selectedProduct.includes(orange.company))

// return (
// <>
// <Navbar />
// <div className="fullpage">
    
// <div className="pro-selected">

// {mobileData.map((phone)=>{
//     return(
//         <div className='pro-input'>
//             <label >
//                 <input type="checkbox" 
//                 checked = {selectedProduct.includes(phone.company)}
//                 onChange={()=>companyHandler(phone.company)}
//                 />
//                 {phone.company}
//             </label>
//         </div>
//     )
// })}

// </div>

// <div className='pageSection'>
//     {filteredProduct.map((item)=>{
//         return(
//             <div>

//             <Link to={`/mobiles/${item.id}`}>
//                 <div className="pageImg">
//                     <img src={item.image} alt="" />
//                 </div>
//             </Link>
//                 <div className="proModel">
//                     {item.company}, {item.model}
//                 </div>
//             </div>
//         )
//     })}

//  </div>
// </div>
// </>
//   )
// }

// export default MobilePage

import React, { useState } from 'react';
import { mobileData } from '../Data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
    const [selectedProduct, setSelectedProduct] = useState([]);

    const companyHandler = (company) => {
        if (selectedProduct.includes(company)) {
            setSelectedProduct(selectedProduct.filter(item => item !== company));
        } else {
            setSelectedProduct([...selectedProduct, company]);
        }
    };

    const filteredProduct = selectedProduct.length === 0
        ? mobileData
        : mobileData.filter(phone => selectedProduct.includes(phone.company));

    const uniqueCompanies = [...new Set(mobileData.map(phone => phone.company))];

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
                            <Link to={`/mobiles/${item.id}`}>
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

export default MobilePage;
