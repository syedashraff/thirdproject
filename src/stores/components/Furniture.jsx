


import React from 'react'
import { furnitureData } from '../Data/furniture'

const Furniture = () => {
    const firstFiveimages = furnitureData.slice(0, 5)

  return (
     <>
            <div className='proTitle'>
                <h2>Furniture</h2>
            </div>
            <div className='proSection'>
                {
                    firstFiveimages.map((item) => {
                        return (
                            <div className='imgBox'>
                                <img className='proImage' src={item.image} />
                            </div>
                        )
                    })
                }

            </div>
        </>
    
  )
}

export default Furniture
