import React from 'react'
import './Campus.css'
import Title from '../Title/Title'
import ImgGallery1 from './../../assets/gallery-1.png'
import ImgGallery2 from './../../assets/gallery-2.png'
import ImgGallery3 from './../../assets/gallery-3.png'
import ImgGallery4 from './../../assets/gallery-4.png'

import white_arrow from './../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className="section" name="campus">
      <Title subTitle="Gallery" title="Campus Photos"/>
      
      <div className="campus">
        <div className="gallery">
          <img src={ImgGallery1} alt="ImgGallery1"  />
          <img src={ImgGallery2} alt="ImgGallery2"  />
          <img src={ImgGallery3} alt="ImgGallery3"  />
          <img src={ImgGallery4} alt="ImgGallery4"  />
        </div>
        <button className="btn dark-btn">see more here <img src={white_arrow} alt="white-arrow" /></button>

      </div>
    </div>



  )
}

export default Campus