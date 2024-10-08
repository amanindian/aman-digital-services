import React from 'react';
import './Contact.css';
import ContactForm from '../Components/ContactForm';

export default function Contact() {
  return (
    <section className="container" id='contact'>
      <div className="contact-form-container">
        <h2>Fill Form to Connect</h2>
        <ContactForm />
      </div>

      <div className="contact-info">
        <h2>Contact Info</h2>
        <div className='contact-cards'>

          <a href="tel:918002579962" className="contact-card">
            <div className="icon">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h3>Call Us</h3>
            <p>+91-8002579962</p></a>

          <a href="mailto:amanparariya@gmail.com" className="contact-card">
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <h3>Email Us</h3>
            <p>amanparariya@gmail.com</p>
          </a>
          <div className="contact-card">
            <div className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3>Our Location</h3>
            <p>Siwan, Bihar, 841226</p>
          </div>

        </div>
      </div>
    </section>
  )
}
