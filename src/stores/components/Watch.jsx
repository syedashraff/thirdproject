

import React from 'react'
import { watchData } from '../Data/watch'

const Watch = () => {
    const firstFiveimages = watchData.slice(0,5)
    return (
        <>
            <div className='proTitle'>
                <h2>Watches</h2>
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

export default Watch
