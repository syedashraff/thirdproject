

import React from 'react'
import { menData } from '../Data/men'

const Men = () => {
    const firstFiveimages = menData.slice(0, 5)
  return (
     <>
            <div className='proTitle'>
                <h2>Men</h2>
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

export default Men
