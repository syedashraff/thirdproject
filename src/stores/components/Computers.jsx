

import React from 'react'
import { computerData } from '../Data/computers'

const computers = () => {
    const firstFiveimages = computerData.slice(0, 5)
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

export default computers 
