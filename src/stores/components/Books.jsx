

import React from 'react'
import { booksData } from '../Data/books'

const Books = () => {
    const firstFiveimages = booksData.slice(0, 5)


  return (
     <>
            <div className='proTitle'>
                <h2>Books</h2>
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

export default Books
