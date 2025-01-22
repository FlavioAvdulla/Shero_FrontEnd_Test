import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { CarouselSize } from './components/Slider/CarouselSize'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Header/>
      <CarouselSize/>
    </div>
  )
}

export default App
