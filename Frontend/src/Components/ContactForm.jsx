import React, { useState } from 'react';
import './ContactForm.css';
import axios from 'axios';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    contactMethod: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      console.log(process.env.REACT_APP_API)
      const formSubmit = await axios.post(`${process.env.REACT_APP_API}/contact`, formData)
      console.log(formSubmit)
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder='Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          placeholder='Email'
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder='Phone No.'
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}

        >
          <option value="">Select a service</option>
          <option value="Web Designing">Web Designing</option>
          <option value="Web Development">Web Development</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="SEO">SEO</option>
          <option value="E-Commerce Development">E-Commerce Development</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <input
          placeholder='Subject'
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}

        />
      </div>
      <div className="form-group">
        <select
          name="contactMethod"
          value={formData.contactMethod}
          onChange={handleChange}
        >
          <option value="">Select a preferred contact method</option>
          <option value="Phone">Phone</option>
          <option value="Email">Email</option>
          <option value="Either">Either</option>
        </select>
      </div>

      <div className="form-group">
        <textarea
          placeholder='Your Message'
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
