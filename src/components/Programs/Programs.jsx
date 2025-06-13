import React from 'react'
import './Programs.css'
import program_Img1 from '../../assets/program-1.png'
import program_Img2 from '../../assets/program-2.png'
import program_Img3 from '../../assets/program-3.png'

import program_Icon1 from '../../assets/program-icon-1.png'
import program_Icon2 from '../../assets/program-icon-2.png'
import program_Icon3 from '../../assets/program-icon-3.png'
import Title from '../Title/Title'

const Programs = () => {
    return (
        <div className='section' name="program">
            <Title subTitle="OUR PROGRAM" title="What We Offer"/>
            
            <div className='Programs'>
                <div className="program">
                    <img src={program_Img1} alt="program_Img1" />
                    <div className="caption">
                        <img src={ program_Icon1} alt=" program_Icon1" />
                        <p>Graduation Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_Img2} alt="program_Img2" />
                    <div className="caption">
                        <img src={ program_Icon2} alt=" program_Icon2" />
                        <p>Masters Degree</p>
                    </div>
                </div>
                <div className="program">
                    <img src={program_Img3} alt="program_Img3" />
                    <div className="caption">
                        <img src={ program_Icon3} alt=" program_Icon3" />
                        <p>Post Graduation</p>
                    </div>
                </div>
            </div>
            </div>
    

    )
}

export default Programs