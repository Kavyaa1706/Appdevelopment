import React from 'react'
import Navbarr from './Navbar'
import "../assets/Faqs.css"
import Footer from './Footer'

//import Layout from '../components/Layout'
function Faqs() {
    return (
        <>
      <div className='nav'>
        <Navbarr/>
      </div>
      <div className='faqback'>

      </div>
      <div>
        <h1 className='faqhead'> 
            Frequently Asked Questions(FAQs)
        </h1>
      </div>
      <div>
        <p className='faqcontent'> 
        <b>Q: What is your payment information ?</b>
        <br/>
        <br/>
         A: As people have different prefered methods, such as credit, debit, PayPal, etc you can make payment through these methods.
         <br/>
         <br/>
         <br/>
        <b>Q:Are discounts available?	</b>
        <br/>
        <br/>
         A:There are discounts according to the event your booking, you can find them in your particular event booking registration form. 
         <br/>
         <br/>
         <br/>
        <b>Q: How much duration it takes to complete our work?</b>
        <br/>
        <br/>
         A: We'll assign managers to decorate the required event and organize it so it takes 1 day.
         <br/>
         <br/>
         <br/>
        <b>Q: How much in advance should I book to avail your services?
</b>
        <br/>
        <br/>
         A: You can pre-book the event in 2-3 weeks.

         <br/>
         <br/>
         <br/>
        <b>Q: Can I select my own package?

</b>
        <br/>
        <br/>
         A: Yes, you can choose. We do customized packages.




        </p>
      </div>
      <div>
        <h2 className='queries'>For Further Queries!</h2>
      </div>
      <div>
     
<input type="text" name="text" class="inputa" placeholder="Type here..."></input>
      </div>
      <div className='footse'>
        <Footer/>
      </div>

        </>
    )
}

export default Faqs