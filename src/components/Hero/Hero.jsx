import React from 'react'
import './Hero.css'
import arrow from './../../assets/dark-arrow.png'

const Hero = () => {
    return (
        /* when use react-scroll : add values target in properties name or id or unique className */
        <div className='hero container' name="home">
            <div className='hero-text'>
                <h1>wwwwwwwwwwWe Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculum is designed to empower students with the knowledge,
                    skills, and experiences needed to excel in the dynamic field of education
                </p>
                <button className="btn">Explore more
                    <img src={arrow} alt="arrow" />
                </button>
            </div>

        </div>
    )
}

export default Hero