import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
import  menu_icon from './../../assets/menu-icon.png'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)
    
    useEffect(() => {
        window.addEventListener('scroll' ,()=>{
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        })
    }, [])

    /* controll by toogleMenu when click on menu_icon */
    const [mobileMenu , setMobileMenu] = useState(false);
    const toogleMenu =()=>{
        mobileMenu ? setMobileMenu(false) :setMobileMenu(true)

    }
    
    return (
        <nav className={`container ${sticky?  'dark-nav' : ''}`}>
            <img src={logo} alt="logo" className='logo' />

            {/* use react-scrool for smoth scrolling behaviour */}
            
            {/*  menu_list =>  show when right :0  / hide when it out viewport (-200) ,  200:width  */}
            <ul className= {`menu_list ${mobileMenu? 'show-menu_list' : 'hide-menu_list'}`}>
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

            {/* Add menu-icon */}
            <img src={ menu_icon } alt="menu_icon"  className='menu_icon'  onClick={toogleMenu}/>

        </nav>
    )
}

export default Navbar