import React, {  useRef } from 'react'
import './Testimonials.css'
import Title from '../Title/Title'
import back_icon from "./../../assets/back-icon.png"
import next_icon from "./../../assets/next-icon.png"
import user_1 from "./../../assets/user-1.png"
import user_2 from "./../../assets/user-2.png"
import user_3 from "./../../assets/user-3.png"
import user_4 from "./../../assets/user-4.png"

const Testimonials = () => {

  const slider = useRef();
  let tx = 0;

  /* functionality for move the slides By buttons */
  const slideForward =()=>{
    if(tx > -50){
      tx -= 25 ;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }

  const slideBackward =()=>{
    if(tx < 0){
      tx += 25 ;
    }
    slider.current.style.transform = `translateX(${tx}%)`

  }

  return (
    <div className='section' name="testimonials">
        <Title subTitle="TESTIMONIALS" title="What Student Says"/>
        
        <div className="Testimonials">

          <img src={next_icon} alt="next_icon"  className='next_btn' 
          onClick={slideForward}/>

          <img src={back_icon } alt="back_icon" className='back_btn' 
          onClick={slideBackward} />

          <div className="Slider">
            <ul ref={slider}>
              <li>
                <div className="slide">
                  <div className="user_ifo">
                    <img src={user_1} alt="user_1"  />
                    <div>
                      <h3>William Jackson 1</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, 
                    and commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className="user_ifo">
                    <img src={user_2} alt="user_2"  />
                    <div>
                      <h3>William Jackson 2</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, 
                    and commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className="user_ifo">
                    <img src={user_3} alt="user_3"  />
                    <div>
                      <h3>William Jackson 3</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, 
                    and commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>

              <li>
                <div className="slide">
                  <div className="user_ifo">
                    <img src={user_4} alt="user_4"  />
                    <div>
                      <h3>William Jackson 4</h3>
                      <span>Edusity, USA</span>
                    </div>
                  </div>
                  <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, 
                    and commitment to academic excellence have truly exceeded my expectations.
                  </p>
                </div>
              </li>
              
            </ul>
          </div>

        </div>
    </div>
  )
}

export default Testimonials