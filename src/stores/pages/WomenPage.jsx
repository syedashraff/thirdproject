

import React, { useState } from 'react';
import { womenData } from '../Data/women'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

// const WomenPage = () => {
//   return (
//     <>
//     <Navbar/>
//     <div className="PageSection">
//       {womenData.map((item, index) => (
//         <div key={index}>
//           <Link to={`/women/${item.id}`}>
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

// export default WomenPage


const WomenPage = () => {

    const [selectedProduct, setSelectedProduct] = useState([])

    const companyHandler=(mango)=>{
            if(selectedProduct.includes(mango)){
                setSelectedProduct(selectedProduct.filter(item => item !== mango))
            }else{
                setSelectedProduct([...selectedProduct, mango]) 
            }
    }


    const filteredProduct = selectedProduct.length===0?
        womenData : womenData.filter((orange)=>selectedProduct.includes(orange.brand))

return (
<>
<Navbar />
<div className="fullpage">
    
<div className="pro-selected">

{womenData.map((phone)=>{
    return(
        <div className='pro-input'>
            <label >
                <input type="checkbox" 
                checked = {selectedProduct.includes(phone.brand)}
                onChange={()=>companyHandler(phone.brand)}
                />
                {phone.brand}
            </label>
        </div>
    )
})}

</div>

<div className='pageSection'>
    {filteredProduct.map((item)=>{
        return(
            <div>

            <Link to={`/women/${item.id}`}>
                <div className="pageImg">
                    <img src={item.image} alt="" />
                </div>
            </Link>
                <div className="proModel">
                    {item.brand}, {item.model}
                </div>
            </div>
        )
    })}

 </div>
</div>
</>
  )
}

export default WomenPage
