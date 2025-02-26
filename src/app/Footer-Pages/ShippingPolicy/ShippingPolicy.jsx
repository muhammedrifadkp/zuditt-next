import React from 'react';
import styles from './ShippingPolicy.module.css';

const ShippingPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Shipping Policy</h1>
      <p className={styles.intro}>
        Since Zuditt AI Innovations LLP provides digital services and software solutions, there is no physical shipping involved.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Service Delivery</h2>
        <p>
          Our services, such as AI web and app development, digital marketing, and software development, are delivered digitally via email, cloud access, or other online platforms.
          Delivery timelines are agreed upon with clients before the commencement of the project.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Delivery Timelines</h2>
        <ul className={styles.list}>
          <li>Standard service delivery: 5-15 business days (depending on project complexity).</li>
          <li>For urgent projects, expedited services may be available upon request.</li>
          <li>Clients will be notified via email once their service is delivered or ready for use.</li>
        </ul>
        <p>
          For further assistance, please contact us at <a href="mailto:sales@zuditt.com" className={styles.link}>sales@zuditt.com</a> or call us at <a href="tel:+917994730307" className={styles.link}>+91 79947 30307</a>.
        </p>
      </div>
    </div>
  );
};

export default ShippingPolicy;