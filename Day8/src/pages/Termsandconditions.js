import React from 'react'
import "../assets/Termsandconditions.css"
import Navbarr from './Navbar'
import Footer from './Footer'
//import Layout from '../components/Layout'
function TermsandConditions() {
    return (
        < >
         <div className='nav'>
            <Navbarr/>
        </div>
        <div className='conta'>

        </div>
         <div className='div'>
             <div  className='background1'>
             </div>
             <div>
                <h1 className='terms'>Terms and Conditions</h1>
                     </div>
                     <div>
                <p className='start'>
                Terms and Conditions for Our Event Organizing Booking Portal:<br/><br/>
                These Terms and Conditions ("Terms") govern your use of our Crystal Events platform. By accessing or using our platform, you agree to comply with these Terms.<br/>
                Please read them carefully.
                <br/>
                <br/>
                <b>1. Use of the Platform:</b>
                <p className='uop'>
                You must be at least 18 years old to use our platform. By using our services, you confirm that you meet this age requirement.
             
             You agree to provide accurate and complete<br/> information when creating an account and using our services. You are responsible for maintaining the confidentiality of your account credentials.
             
             You are solely responsible for <br/>all activities conducted through your account. Notify us immediately of any unauthorized use of your account or any other security breach.
                </p>
                <b>2. Booking and Payments:</b>
                <p className='uop'>
                When booking venues or services through our platform, you agree to abide by the terms and conditions set by the venue or service provider, including payment terms, cancellation policies, and any additional terms specific to the booking.
             
             Payment processing is handled securely through our platform. By using our payment services, you agree to comply with our payment terms and authorize us to process your payments and share relevant information with payment service providers.
                </p>
                <b>3. User Content:</b>
             
             <p className='uop'>
                 You retain ownership of any content you submit to our platform, including reviews, comments, messages, and photos ("User Content"). By submitting User Content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute it for promotional and operational purposes.
                 
                 You are solely responsible for the accuracy and legality of your User Content. We reserve the right to remove or edit User Content that violates our policies or is deemed inappropriate.
             </p>
             
             <b>4. Privacy:</b>
             
             <p className='uop'>Our privacy practices are governed by our Privacy Policy. By using our platform, you consent to the collection, use, and sharing of your information as described in our Privacy Policy.</p>
             
             <b>5. Prohibited Activities</b>
             
             <p className='uop'>
                 You agree not to engage in any of the following prohibited activities:
                 
                 Violating any applicable laws, regulations, or third-party rights.
                 Impersonating another person or entity.
                 Uploading or distributing malware or malicious code.
                 Attempting to gain unauthorized access to our platform or other users' accounts.
                 Engaging in any activity that disrupts, damages, or interferes with the operation of our platform.
             </p>
             <b>6. Termination</b>
             
             <p className='uop'>We reserve the right to suspend or terminate your account and access to our platform at our discretion, with or without cause. Termination may result from violations of these Terms or other policies.</p>
             
             <b>7. Limitation of Liability</b>
             
             <p className='uop'>We do not guarantee the accuracy, completeness, or availability of information on our platform. We are not responsible for any damages, losses, or disputes arising from your use of our platform or interactions with other users or third parties.</p>
             
             <b>8. Changes to Terms</b>
             
             <p className='uop'>We may update these Terms at any time. We will notify you of significant changes through email or on our platform. Your continued use of our platform after such changes constitutes your acceptance of the updated Terms.</p>
             
             <b>9. Contact Us</b>
             
             <p className='uop'> If you have any questions or concerns about these Terms and Conditions, please contact us at [FAQ].</p>
             
             <b>These Terms and Conditions were last updated on [01-09-2023].</b>
                </p>
             
                     </div>
             
             
         </div>
         <div className='footers'>
            <Footer/>
         </div>

        </>
    )
}

export default TermsandConditions