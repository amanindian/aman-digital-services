import React, { useContext, useState, useEffect, useRef } from "react";
import "./EnquirePopup.css";
import { StateContext } from "../Context/StateProvider";

export default function EnquirePopup() {
  const { isEnquirePopup, setIsEnquirePopup } = useContext(StateContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Select Services",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    // You can do whatever you want with the form data here, like sending it to an API or processing it further
    console.log(formData);
  };

  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsEnquirePopup(false);
      }
    };

    if (isEnquirePopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEnquirePopup, setIsEnquirePopup]);


  return (
    isEnquirePopup && (
      <section className="popup" >
        <div className="enq-popup" ref={popupRef}>
          <i
            className="material-symbols-outlined btn-popup-close"
            onClick={() => {
              setIsEnquirePopup(false);
            }}
          >close</i>

          <h2 className="enq-popup-title">Enquire Now</h2>
          <form className="enq-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              placeholder="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
            >
              <option disabled>Select Services</option>
              <option value="Ser 1">Web Development</option>
              <option value="Ser 2">Web Designing</option>
              <option value="Ser 3">Digital Marketing</option>
            </select>

            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Ente Your Message"
            ></textarea>

            <button className="enq-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    )
  );
}
