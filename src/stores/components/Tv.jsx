


import React from 'react'
import { tvData } from '../Data/tv'

const Tv = () => {
    const firstFiveimages = tvData.slice(0, 5)


  return (
      <>
            <div className='proTitle'>
                <h2>Tv's</h2>
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

export default Tv
