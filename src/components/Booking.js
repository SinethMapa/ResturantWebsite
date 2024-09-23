// src/components/Booking.js
import React, { useState } from 'react';
//import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '',
    specialRequests: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  return (
    <section className="booking-section">
      <h2>Book Your Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          required 
          value={formData.name} 
          onChange={handleChange} 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          required 
          value={formData.email} 
          onChange={handleChange} 
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone" 
          required 
          value={formData.phone} 
          onChange={handleChange} 
        />
        <input 
          type="date" 
          name="date" 
          required 
          value={formData.date} 
          onChange={handleChange} 
        />
        <select name="time" required value={formData.time} onChange={handleChange}>
          <option value="">Select Time</option>
          <option value="12:00">12:00 PM</option>
          <option value="1:00">1:00 PM</option>
          <option value="6:00">6:00 PM</option>
          <option value="7:00">7:00 PM</option>
        </select>
        <select name="partySize" required value={formData.partySize} onChange={handleChange}>
          <option value="">Party Size</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="6">6</option>
        </select>
        <textarea 
          name="specialRequests" 
          placeholder="Special Requests" 
          value={formData.specialRequests} 
          onChange={handleChange} 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Booking;
