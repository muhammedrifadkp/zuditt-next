'use client'
import { useState } from 'react';
import styles from "./page.module.css"; // Import styles as module
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';
import '../globals.css'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    emailjs
    .sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // Use environment variable
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Use environment variable
      e.target, // This automatically binds the form data
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Use environment variable
    )
    .then(
      (result) => {
        console.log('Email sent successfully:', result.text);
        alert('Message sent successfully!');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          message: '',
        }); // Clear the form
      },
      (error) => {
        console.error('Email sending failed:', error.text);
        alert('Failed to send the message. Please try again.');
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
      <div className={styles.backgroundImage}>
        <div className={styles.contactLeft}>
          <h1 className={styles.contactTitle}>
          <span className={styles.lineBreak1}>Get a quote </span>
<span className={styles.lineBreak}>or </span>
<span className={styles.linearBreak1}>set up a </span>
<span className={styles.lineBreak}>consultation.</span>
          </h1>
          <div className={styles.socialLinks}>
          <a
              href="https://www.instagram.com/zudittaiinnovations?igsh=dmwwdGt5aXoyM3Rs"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-instagram"></i>
            </a>
        

            <a
              href="   https://www.facebook.com/profile.php?id=61563675530112"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/company/104736888/" className={styles.socialIcon}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            
            <a
              href="https://wa.me/917994730307" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
  <i className="fa-brands fa-whatsapp"></i>             </a>
          </div>
        </div>

        <div className={styles.contactRight}>
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <div className={styles.formRow}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className={styles.submitBtn}>Send</button>
          </form>
        </div>
      </div>

      <footer className={styles.contactFooter}>
        <div className={styles.footerItem}>
          <h3>Corporate headquarters</h3><br />
          <i className="fa-solid fa-location-dot"></i>
          <p className={styles.footerItem2}>KMC 18 - 289 D City Mall Building, MG Road, <br /> <span className={styles.footerItems2}>Kasaragod, Kerala, India</span></p>
        </div>
        <div className={styles.footerItem}>
          <h3>Office Timing: Mon-Sat</h3><br />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-alarm-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.04 8.04 0 0 0-3.527-3.527" />
          </svg>
          <p className={styles.footerItem2}>9:00 AM - 6:00 PM</p>
        </div>
        <div className={styles.footerItem}>
          <h3>Email & phone</h3><br />
          <i className="fa-solid fa-phone"></i>
          <p className={styles.footerItem2}>+91 79947 30307<br />
            <span className={styles.footerItemss2}>info@zuditt.com</span></p>
        </div>
      </footer>
    </>
  );
};

export default Contact;