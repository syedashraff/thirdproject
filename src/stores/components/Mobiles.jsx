

import React from 'react'
import { mobileData } from '../Data/mobiles'

const Mobiles = () => {
    const firstFiveimages = mobileData.slice(0,5)
  return (
    <>
    <h2>Mobiles</h2>
    <div className='proSection'> 
        {
            firstFiveimages.map((item) =>{
                return(
                    <div className='imgBox'>
                        <img className='proImage' src={item.image} />
                    </div>

                )
            } )
        }


      
    </div>
    </>
  )
}

export default Mobiles
