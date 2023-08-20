import React, { useRef } from 'react';
import './contact.css';
import {BsPhoneFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {BsMessenger} from 'react-icons/bs';
import emailjs from 'emailjs-com';


const Contact = () => {

  const contactArray = [ 
  {
    "icon": <BsPhoneFill/>,
    "content": "+36 50 129 2831",
    "url": "tel:+36 50 129 2831",
    "descripton": "Call me!"
  },
  {
    "icon": <HiOutlineMail/>,
    "content": "felegyhazi.david@gmail.com",
    "url": "https://mailto:felegyhazi.david@gmail.com",
    "descripton": "Send me an e-mail"
  },
  {
    "icon": <BsMessenger/>,
    "content": "facebook.com/david.felegyhazi",
    "url": "http://m.me/david.felegyhazi",
    "descripton": "Write me on Messenger"
  }]

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t312w4w', 'template_j9meyqf', form.current, 'dZ96iffI1Ryvowb67');
    
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Any Questions?</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className='information__container'>
          <h3>Contact Information</h3>
          <p>If you have any questions for me, or just want to talk a bit, get in touch!</p>
          <div className='information__chip__container'>
            {contactArray.map( (contact) => {
              return(
                <article className='information__chip' data-aos="zoom-in">
                  <p className='information__chip__icon'>{contact.icon}</p>
                  <span className='information__text'>{contact.content}</span>
                  <a href={contact.url} target='_blank' rel='noreferrer'>{contact.descripton}</a>
                </article>
              )})}
          </div>
        </div>
        <div className='email__container'>
          <h3>Contact with me in direct form! </h3>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <input type="text" name='name' placeholder='Your full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary' >Send a message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact