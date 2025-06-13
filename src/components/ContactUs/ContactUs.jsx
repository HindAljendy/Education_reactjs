import React, { useState } from 'react'
import './ContactUs.css'
import Title from '../Title/Title'
import location_icon from './../../assets/location-icon.png'
import mail_icon from './../../assets/mail-icon.png'
import message_icon from './../../assets/msg-icon.png'
import phone_icon from './../../assets/phone-icon.png'
import white_arrow from './../../assets/white-arrow.png'

const ContactUs = () => {

    /* contact form by using web3form service  without backend*/

    const [result, setResult] = useState("");

    const onSubmit_func = async (event) => {
        event.preventDefault();

        setResult("Sending....");

        /* This collects all the data entered in the form (event.target) and places it in an Object FormData. */
        const formData = new FormData(event.target);

        formData.append("access_key", "2785a43d-f2b4-413a-8a5e-d8a2a38b0ac8");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        //console.log(data);

        if (data.success) {
            console.log("Form Submitted Successfully", data.data);
            setResult("Form Submitted Successfully");
            
            /* Reset the data inputs */
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (

    <div className='section' name="contact_us">
        <Title subTitle="Contact Us" title="Get in Touch "/>
        
        <div className="ContactUs">
            <div className="contact-col">
                <h3>Send us a message <img src={message_icon} alt="message_icon"  /></h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to
                    us as we strive to provide exceptional service to our university community.
                </p>
                
                <ul>
                    <li>
                        <img src={ mail_icon} alt=" mail_icon" />
                        Contact@GreatStack.dev 
                    </li>
                    <li>
                        <img src={phone_icon} alt="phone_icon"  />
                        +1 123-456-7890 
                    </li>
                    <li>
                        <img src={location_icon} alt="location_icon"  />
                        77 Massachusetts Ave, Cambridge MA 02139, United States
                    </li> 
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit_func}>
                    <label >Your Name</label>
                    <input type="text" name="name"  placeholder='Enter Your Name' required />
            
                    <label >Phone Number </label>
                    <input type="tel" name="phone"  placeholder='Enter Your Phone Number' required />
                    
                    <label >Write Your Message Here</label>
                    <textarea name="message" rows="6" placeholder='Enter Your Message' required ></textarea>

                    <button  className="btn dark-btn" type="submit">submit now
                        <img src={white_arrow} alt="white_arrow"  />
                    </button>
                </form>

                {/* display message after submit the form */}
                <span>{result}</span>
            </div> 
        </div>
    </div>
    )
}

export default ContactUs