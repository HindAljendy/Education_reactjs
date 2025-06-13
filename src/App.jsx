
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Campus from './components/Campus/Campus'
import ContactUs from './components/ContactUs/ContactUs'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Programs from './components/Programs/Programs'
import Testimonials from './components/Testimonials/Testimonials'

function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Programs/>
      <AboutUs/>
      <Campus/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
