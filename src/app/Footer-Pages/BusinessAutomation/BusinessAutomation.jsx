import React from 'react';
import styles from './BusinessAutomation.module.css';

const BusinessAutomation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Business Automation</h1>
      <p className={styles.intro}>
        Streamline your operations and improve efficiency with our business automation solutions. We help businesses automate processes, reduce costs, and enhance productivity by integrating modern technologies.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Why Choose Business Automation?</h2>
        <p>
          In today’s competitive environment, automation is the key to staying ahead. Business automation allows you to reduce manual work, enhance accuracy, and focus on what matters most — growing your business. Our automation solutions are tailored to meet the unique needs of your business, optimizing both front-end and back-end processes.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Our Business Automation Services Include:</h2>
        <ul className={styles.serviceList}>
          <li>Workflow Automation</li>
          <li>Customer Relationship Management (CRM) Integration</li>
          <li>Automated Reporting & Analytics</li>
          <li>Email and Communication Automation</li>
          <li>Data Entry & Processing Automation</li>
          <li>Supply Chain & Inventory Management Automation</li>
          <li>Employee Management Automation</li>
          <li>Chatbots and AI Automation</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>How It Works</h2>
        <p>
          We start by understanding your business processes and identifying areas where automation can make the most impact. Then, we design and implement custom automation solutions that fit seamlessly into your existing workflows. Our team ensures smooth deployment and provides ongoing support to maximize efficiency.
        </p>
      </div>

      <div className={styles.callToAction}>
        <h2>Transform Your Business with Automation</h2>
        <p>Ready to automate your business and improve efficiency? Contact us to discuss how our automation solutions can help you achieve more with less effort.</p>
        <button className={styles.contactBtn}>Contact Us</button>
      </div>
    </div>
  );
};

export default BusinessAutomation;
