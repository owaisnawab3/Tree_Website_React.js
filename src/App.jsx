import './App.css'
import About from './Components/About'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import NewsLetter from './Components/NewsLetter'
import Popular from './Components/Popular'
import Review from './Components/Review'
import ScrollUp from './Components/ScrollUp'

function App() {
  
  return (
    <>
    <div className='scroll-smooth w-full overflow-hidden'>
      <Navbar/>
      <Home/>
      <Features/>
      <About/>
      <Popular/>
      <div className='relative bg-[#032A17]'>
      <Review/>
      <NewsLetter/>
      <Footer/>
      </div>
      <ScrollUp/>
    </div>
    </>
  )
}

export default App
