import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {FaInstagram} from 'react-icons/fa'

const contact = () => {
  return (
    <section id='contact'>
      <h5> Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>chidinmaekuma420@gmail.com</h5>
            <a href="mailto:chidinmaekuma420@gmail.com" target= "_blank" rel="noreferrer"> Send a Message</a>
          </article>

          <article className="contact_option">
              <FaInstagram className='contact_option-icon'/>
              <h4>Instagram</h4>
              <h5>ogerrii</h5>
              <a href="https://ig.me/m/ogerrii" target= "_blank" rel="noreferrer"> Send a Message</a>
            </article>

          <article className="contact_option">
              <RiMessengerLine className='contact_option-icon'/>
              <h4>Messenger</h4>
              <h5>chidinma</h5>
              <a href="https://facebook.com" target= "_blank" rel="noreferrer"> Send a Message</a>
            </article>
        </div>
        
        {/* END OF CONTACT  OPTIONS */}
        
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default contact
