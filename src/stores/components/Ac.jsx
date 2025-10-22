

import React from 'react'
import { acData } from '../Data/ac'

const Ac = () => {
    const firstFiveimages = acData.slice(0, 5)
  return (
    <>
            <div className='proTitle'>
                <h2>Computers</h2>
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

export default Ac
