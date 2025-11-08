import React, { useState } from 'react';
import emailjs from 'emailjs-com';

// you need to sign up at emailjs.com and get your own service ID, template ID and user ID

export default function Enquiry() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    location: '',
    contact: '',
    email: '',
    projectType: '',
    message: ''
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const requiredOk = () => form.name.trim() && form.contact.trim() && form.email.trim() && form.projectType.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!requiredOk()) {
      setStatus({ type: 'error', text: 'Please fill Name, Contact Number, Email and Project Type.' });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // replace with real API call
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus({ type: 'success', text: 'Inquiry sent. Our solar experts will contact you shortly.' });
        setForm({ name: '', company: '', location: '', contact: '', email: '', projectType: '', message: '' });
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        setStatus({ type: 'error', text: 'Failed to send inquiry. Please try again later.' });
      });
  };

  return (
    <section className="contact-section">
      <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="section-title">
          <h2>Inquiry / Get a Quote</h2>
          <p>Looking to reduce your electricity costs or power your business sustainably? Fill out the form — our solar experts will get in touch to design a tailored solution.</p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'grid', gap: 12 }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="input" />
          <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="input" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="input" />
          <input name="contact" value={form.contact} onChange={handleChange} placeholder="Contact Number" className="input" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input" />
          <select name="projectType" value={form.projectType} onChange={handleChange} className="input">
            <option value="">Select Project Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="agricultural">Agricultural</option>
            <option value="other">Other</option>
          </select>
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (details, timeline, budget etc.)" rows="6" className="input" />

          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button type="submit" className="btn">Submit Inquiry</button>
            <a className="btn btn-secondary" href="mailto:info@chalosaathi.com">Email Us</a>
          </div>

          {status && (
            <div role="status" style={{ color: status.type === 'error' ? '#c0392b' : '#1e7e34', marginTop: 8, fontWeight: 600 }}>
              {status.text}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}