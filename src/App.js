import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/api/leads', {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      });
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input name="name" value={formData.name} onChange={handleChange} required /><br />

        <label>Email</label><br />
        <input name="email" value={formData.email} onChange={handleChange} required /><br />

        <label>Company</label><br />
        <input name="company" value={formData.company} onChange={handleChange} required /><br />

        <label>Message</label><br />
        <textarea name="message" value={formData.message} onChange={handleChange} required /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
