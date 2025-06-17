
import { useState } from 'react'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Campus from './components/Campus/Campus'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Programs/>

      <AboutUs setPlayState={setPlayState}/>

      <Campus/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>

    {/* video player */}
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    
    </>
  )
}

export default App
