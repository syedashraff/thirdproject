


import React from 'react'
import { fridgeData } from '../Data/fridge'

const Fridge = () => {
    const firstFiveimages = fridgeData.slice(0, 5)
  return (
     <>
            <div className='proTitle'>
                <h2>Fridge</h2>
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

export default Fridge
