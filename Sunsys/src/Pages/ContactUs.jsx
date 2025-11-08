import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS

// you need to sign up at emailjs.com and get your own service ID, template ID and user ID

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: 'error', text: 'Please fill name, email and message.' });
      return;
    }
    if (!validateEmail(form.email)) {
      setStatus({ type: 'error', text: 'Please enter a valid email address.' });
      return;
    }

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setStatus({ type: 'success', text: 'Thank you — your message has been sent.' });
        setForm({ name: '', email: '', phone: '', message: '' });
      }, (err) => {
        console.error('Failed to send email. Error:', err);
        setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
      });
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Contact Us</h2>
          <p>Get in touch for a free consultation or quote.</p>
        </div>

        <div className="contact-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
          <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'grid', gap: 12 }}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="input"
              aria-label="Name"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="input"
              aria-label="Email"
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone (optional)"
              className="input"
              aria-label="Phone"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="6"
              className="input"
              aria-label="Message"
            />
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <button type="submit" className="btn">Send Message</button>
              <a className="btn btn-secondary" href="mailto:info@chalosaathi.com">Email Us</a>
            </div>

            {status && (
              <div
                role="status"
                style={{
                  color: status.type === 'error' ? '#c0392b' : '#1e7e34',
                  marginTop: 8,
                  fontWeight: 600
                }}
              >
                {status.text}
              </div>
            )}
          </form>

          <div className="contact-info" style={{ marginTop: 24 }}>
            <h3>Office</h3>
            <p>SunSys Tech Solutions Pvt. Ltd.</p>
            <p>Email: info@chalosaathi.com</p>
            <p>Phone: +91 98765 43210</p>
            <p style={{ marginTop: 12 }}>Or send us a message using the form — we typically respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}