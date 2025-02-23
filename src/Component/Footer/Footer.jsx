'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaTwitter, FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Newsletter Section */}
        <section className={styles.newsletter}>
          <div>
            <h2 className={styles.title}>Get Newsletter</h2>
            <div className={styles.content}>
              <p className={styles.description}>
                Stay updated with the latest news, trends, and services from Zuditt Ai Innovations LLP.
              </p>
              <div className={styles.inputGroup}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className={styles.input}
                />
                <button className={styles.subscribeBtn}>Subscribe</button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Sections */}
        <div className={styles.sections}>
          <div className={styles.section}>
            <h3>Company</h3>
            <nav>
              <Link href="/about" onClick={scrollToTop}>About</Link>
              <Link href="/Footer-Pages/Leadership" onClick={scrollToTop}>Leadership</Link>
              <Link href="/blog" onClick={scrollToTop}>Blog</Link>
              <Link href="/Footer-Pages/PrivacyPolicy" onClick={scrollToTop}>Privacy policy</Link>
              <Link href="/Footer-Pages/Careers" onClick={scrollToTop}>Careers</Link>
              <Link href="/Footer-Pages/TermsConditions" onClick={scrollToTop}>Terms conditions</Link>
            </nav>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/profile.php?id=61563675530112&mibextid=kFxxJD" onClick={scrollToTop}><FaFacebookF /></a>
              <a href="https://www.instagram.com/zudittaiinnovations?igsh=OG9kdzZkemxrcGNv" onClick={scrollToTop}><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/zuditt-ai-innovations-llp/" onClick={scrollToTop}><FaLinkedinIn /></a>
              <a href="/" onClick={scrollToTop}><FaTwitter /></a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Service</h3>
            <nav>
              <Link href="/mobile-development" onClick={scrollToTop}>Mobile Development</Link>
              <Link href="/web-development" onClick={scrollToTop}>Website development</Link>
              <Link href="/software-development" onClick={scrollToTop}>Software development</Link>
              <Link href="/digital-marketing" onClick={scrollToTop}>Digital marketing</Link>
              <Link href="/content-marketing" onClick={scrollToTop}>Content Marketing</Link>
              <Link href="/Footer-Pages/WhatsAppAutomation" onClick={scrollToTop}>WhatsApp automation</Link>
              <Link href="/business-outsourcing" onClick={scrollToTop}>Business outsourcing process</Link>
            </nav>
          </div>

          <div className={styles.section}>
            <h3>Contact</h3>
            <p>KMC 18 - 289 D City Mall Building, MG Road, Kasaragod, Kerala, India</p>
            <p>Office Timing: Mon-Sat</p>
            <p>9.00 AM - 6.00 PM</p>
            <p>India Contact Number: +91 7994730307</p>
          </div>
        </div>

        {/* Policy and Terms Section */}
        <div className={styles.section}>
          <h3>Policies</h3>
          <p>
            Kindly update the website with the below policy, Terms and Conditions, Privacy, Refunds/Cancellations: 
            Kindly align the Refund policy, Pricing, Shipping policy (Minimum and Maximum timeline). 
            Contact Us: Must have India contact number and operating address. 
            Also, update the website with the business name "Zuditt Ai Innovations LLP" to proceed further. Thank you.
          </p>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>Zuditt Ai Innovations LLP 2024 © All Rights Reserved | Powered by MCA</p>
          <p className={styles.copyright}>Company Number Reg ACI-8001</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;