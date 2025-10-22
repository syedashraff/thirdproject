



import React from 'react'
import { womenData } from '../Data/women'

const Women = () => {
    const firstFiveimages = womenData.slice(0, 5)

    return (
        <>
            <div className='proTitle'>
                <h2>Women's Wear</h2>
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

export default Women
