import 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import { CarouselSize } from './components/Slider/CarouselSize'
import Posts from './components/Posts'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <Navbar/>
      <Header/>
      <Posts/>
      <CarouselSize/>
    </div>
  )
}

export default App
