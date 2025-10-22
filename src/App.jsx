import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

// Pages
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import AcPage from './stores/pages/acPage'
import BooksPage from './stores/pages/booksPage'
import FridgePage from './stores/pages/fridgePage'
import FurniturePage from './stores/pages/furniturePage'
import KitchenPage from './stores/pages/KitchenPage'
import MenPage from './stores/pages/MenPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import TvPage from './stores/pages/TvPage'
import WatchPage from './stores/pages/WatchPage'
import WomenPage from './stores/pages/WomenPage'

// Single Product Pages
import MobileSingle from './singles/MobileSingle'
import ComputerSingle from './singles/ComputerSingle'
import AcSingle from './singles/AcSingle'
import BooksSingle from './singles/BooksSingle'
import FridgeSingle from './singles/FridgeSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import KitchenSingle from './singles/KitchenSingle'
import MenSingle from './singles/MenSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import TvSingle from './singles/TvSingle'
import WatchSingle from './singles/WatchSingle'
import WomenSingle from './singles/WomenSingle'

// Cart
import UserCart from './stores/UserCart'

const App = () => {
  return (
    <Routes>
      {/* Landing / Home */}
      <Route path='/' element={<LandingPage />} />

      {/* Category Pages */}
      <Route path='/mobile' element={<MobilePage />} />
      <Route path='/computer' element={<ComputerPage />} />
      <Route path='/ac' element={<AcPage />} />
      <Route path='/books' element={<BooksPage />} />
      <Route path='/fridge' element={<FridgePage />} />
      <Route path='/furniture' element={<FurniturePage />} />
      <Route path='/kitchen' element={<KitchenPage />} />
      <Route path='/men' element={<MenPage />} />
      <Route path='/speaker' element={<SpeakerPage />} />
      <Route path='/tv' element={<TvPage />} />
      <Route path='/watch' element={<WatchPage />} />
      <Route path='/women' element={<WomenPage />} />

      {/* Single Product Pages */}
      <Route path='/mobile/:id' element={<MobileSingle />} />
      <Route path='/computer/:id' element={<ComputerSingle />} />
      <Route path='/ac/:id' element={<AcSingle />} />
      <Route path='/books/:id' element={<BooksSingle />} />
      <Route path='/fridge/:id' element={<FridgeSingle />} />
      <Route path='/furniture/:id' element={<FurnitureSingle />} />
      <Route path='/kitchen/:id' element={<KitchenSingle />} />
      <Route path='/men/:id' element={<MenSingle />} />
      <Route path='/speaker/:id' element={<SpeakerSingle />} />
      <Route path='/tv/:id' element={<TvSingle />} />
      <Route path='/watch/:id' element={<WatchSingle />} />
      <Route path='/women/:id' element={<WomenSingle />} />

      {/* Cart */}
      <Route path='/cart' element={<UserCart />} />
    </Routes>
  )
}

export default App
