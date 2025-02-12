import React from 'react';
import Link from 'next/link';
import styles from './WhatsAppAutomation.module.css';

const WhatsAppAutomation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>WhatsApp Automation</h1>
      <p className={styles.intro}>
        Unlock the full potential of WhatsApp with our powerful automation solutions. We provide tools and services to automate customer interactions, marketing campaigns, and support processes, making your business operations more efficient and streamlined.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>What is WhatsApp Automation?</h2>
        <p>
          WhatsApp Automation allows businesses to manage customer interactions through automated messaging, reminders, notifications, and responses. With our solutions, you can engage customers, increase conversion rates, and ensure timely communication without manual effort.
        </p>
        <div className={styles.imageWrapper}>
          <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="WhatsApp Automation" className={styles.sectionImage} />
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Our WhatsApp Automation Services Include:</h2>
        <ul className={styles.serviceList}>
          <li>Automated Customer Support</li>
          <li>Marketing Campaign Automation</li>
          <li>Order Confirmation & Tracking</li>
          <li>Appointment Reminders</li>
          <li>Lead Generation & Qualification</li>
          <li>Personalized Messages & Notifications</li>
          <li>WhatsApp Chatbots Integration</li>
          <li>Integration with CRM & other tools</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Benefits of WhatsApp Automation</h2>
        <ul className={styles.benefitsList}>
          <li>24/7 Customer Support</li>
          <li>Enhanced Customer Engagement</li>
          <li>Reduced Operational Costs</li>
          <li>Faster Response Times</li>
          <li>Increased Sales & Conversions</li>
          <li>Personalized Customer Interactions</li>
          <li>Scalable & Easy to Manage</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>How It Works</h2>
        <p>
          Our WhatsApp Automation solutions integrate seamlessly with your existing systems. We use APIs and advanced tools to create workflows that automate repetitive tasks, such as sending notifications, responding to queries, and managing campaigns. Our team ensures smooth implementation and provides ongoing support to maximize efficiency.
        </p>
        <div className={styles.imageWrapper}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="WhatsApp Automation Process" className={styles.sectionImage} />
        </div>
      </div>

      <div className={styles.callToAction}>
        <h2>Get Started with WhatsApp Automation Today</h2>
        <p>Ready to automate your customer interactions on WhatsApp? Contact us to learn more about how we can help you streamline your business processes.</p>
        <Link href="/contacts" className={styles.contactBtn}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default WhatsAppAutomation;