import React from 'react'
import img from "../assets/bgs.jpg"
import "../assets/Privacypolicy.css"
import Navbarr from './Navbar'
import Footer from './Footer'
//import Layout from '../components/Layout'
function Privacypolicy() {
    return (
        <>
        
        <div  className='background'>
            
        </div>
        <div>
            <h1 className='pp'>Privacy Policy</h1>
        </div>
        <div>
            <p className='ppara'>
            Welcome to Crystal Events. Protecting your privacy is of utmost importance to us. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information<br/>
             when you use our platform.
            </p>
            <p className='ppara1'>
            <b>Information Collection:</b> We collect personal information, such as your name, email address, phone number, and payment information when you sign up for an account<br/>
             or use our services. Additionally, we gather event-related details, user-generated content, usage information, and employ cookies and similar technologies to enhance<br/>
             your experience.
            </p>
            <p className='ppara1'>
            <b>Use of Information: </b>Your information is utilized to provide services like venue bookings, vendor connections, and event management tools. We may also personalize your experience, send important updates, analyze user behavior for improvements, and, if you opt-in, deliver marketing communications. Compliance with legal obligations is<br/>
             another purpose for which your data may be used.
            </p>
            <p className='ppara1'>
            <b>Data Sharing:</b> We may share your information with event attendees, organizers, vendors, and service providers to facilitate event planning and platform operation. In resp<br/>
            -onse to legal requirements, we may disclose information to legal authorities. Your privacy remains a priority, and we take steps to protect your data.
            </p>
            <p className='ppara1'>
            <b>Data Security:</b> We employ reasonable measures to safeguard your information from unauthorized access, disclosure, alteration, or destruction. Although no online transmi<br/>
            -ssion is entirely secure, we strive to maintain the security of your data.
            </p>
            <p className='ppara1'>
            <b>Your Rights:</b> You have rights regarding your data, including access, deletion, and the ability to opt-out of marketing communications. You can also manage cookie prefer<br/>
            -ences in your browser settings. Please contact us with any questions or concerns regarding your privacy.
            </p>
            <p className='policy'>
            This Privacy Policy may be updated to reflect changes in our practices or to comply with legal requirements. We will notify you of significant changes through email or on our platform. Thank you for trusting Crystal Events.
            </p>
        </div>
        <div className='footer'>
            <Footer/>
        </div>
        <div className='nb'>
            <Navbarr/>
        </div>
</>
    )
}

export default Privacypolicy