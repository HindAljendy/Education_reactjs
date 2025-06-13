import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link , animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll' ,()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])
    
    return (
        <nav className={`container ${sticky?  'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className='logo' />

            {/* use react-scrool for smoth scrolling behaviour */}
            <ul>
                <li>
                    <Link to='home' offset={0} smooth={true} duration={500} spy={true}>Home</Link>
                </li>
        
                <li>
                    <Link to='program' offset={-100}  smooth={true} duration={500} spy={true}>Program</Link>
                </li>
                
                <li>
                    <Link to='about_us' offset={-150} smooth={true} duration={500} spy={true}>About Us</Link>
                </li>
                
                <li>
                    <Link to='campus'  offset={-100} smooth={true} duration={500} spy={true}>Campus</Link>
                </li>
                
                <li>
                    <Link to='testimonials'  offset={-100} smooth={true} duration={500} spy={true}>Testimonials</Link>
                </li>
                
                <li className='btn'> 
                    <Link to='contact_us'  offset={-100}   smooth={true} duration={500} spy={true}>Contact Us</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Navbar