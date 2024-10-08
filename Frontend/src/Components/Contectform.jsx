import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Select Services'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do whatever you want with the form data here, like sending it to an API or processing it further
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="tel"
          placeholder="Phone No"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option disabled>Select Services</option>
          <option value="Ser 1">Ser 1</option>
          <option value="Ser 2">Ser 2</option>
          <option value="Ser 3">Ser 3</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
