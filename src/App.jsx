



import React from 'react'
import { Routes, Route }  from 'react-router-dom'

import './App.css'
import LandingPage from './stores/pages/LandingPage'
// import Kitchen from './stores/components/Kitchen'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import AcPage from './stores/pages/acPage'
import BooksPage from './stores/pages/booksPage'
import FridgePage from './stores/pages/fridgePage'
import FurniturePage from './stores/pages/FurniturePage' 
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import WomenPage from './stores/pages/WomenPage'
import MobileSingle from './singles/MobileSingle'
import AcSingle from './singles/AcSingle'
import BooksSingle from './singles/BooksSingle'
import ComputerSingle from './singles/ComputerSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import WatchSingle from './singles/WatchSingle'
import WomenSingle from './singles/WomenSingle'
import UserCart from './stores/UserCart'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = { <LandingPage />}/>
        {/* <Route path = '/abc' element = { <Kitchen/>}/> */}
        <Route path = '/Mobile' element = { <MobilePage/>}/>
        <Route path = '/Computers' element = { <ComputerPage/>}/>
        <Route path = '/ac'element = { <AcPage/>}/>
        <Route path = '/books' element = { <BooksPage/>}/>
        <Route path = '/fridge' element = { <FridgePage/>}/>
       <Route path = '/Furniture' element = {<FurniturePage/>}/> 
        <Route path='/Kitchen' element = {<KitchenPage/>}/>
        <Route path='/Men' element = {<MenPage/>}/> 
        <Route path='/Speaker' element = {<SpeakerPage/>}/>
        <Route path='/Tv' element = {<TvPage/>}/>    
        <Route path ="/Watch" element = {<WatchPage/>}/>  
        <Route path ="/Women" element = {<WomenPage/>}/>
        <Route path='/mobiles/:id' element = {<MobileSingle/>}/>
        <Route path='/ac/:id' element = {<AcSingle/>}/>
        <Route path='/books/:id' element = {<BooksSingle/>}/>
        <Route path='/computer/:id' element = {<ComputerSingle/>}/>
        <Route path='/fridge/:id' element = {<FridgeSingle/>}/>
        <Route path='/furniture/:id' element = {<FurnitureSingle/>}/>
        <Route path='/kitchen/:id' element = {<KitchenSingle/>}/>
        <Route path='/men/:id' element = {<MenSingle/>}/>
        <Route path='/speaker/:id' element = {<SpeakerSingle/>}/>
        <Route path='/tv/:id' element = {<TvSingle/>}/>
        <Route path='/watch/:id' element = {<WatchSingle/>}/>
        <Route path='/women/:id' element = {<WomenSingle/>}/>
        


        <Route path='/cart' element={<UserCart/>}/>
        

      </Routes>
      
    </div>
  )
}

export default App
