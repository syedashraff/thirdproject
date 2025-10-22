


import React from 'react'
import { speakerData } from '../Data/speaker'

const Speaker = () => {

    const firstFiveimages = speakerData.slice(0, 5)
  return (
    <>
            <div className='proTitle'>
                <h2>Speaker</h2>
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

export default Speaker
