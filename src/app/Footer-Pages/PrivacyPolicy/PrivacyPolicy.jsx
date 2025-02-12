import React from 'react';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>
      <p className={styles.intro}>
        At Zuditt Ai Innovation LLP, we value and respect the privacy of our users. This privacy policy outlines the
        types of personal information we collect, how we use it, and the measures we take to protect your data.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>1. Information We Collect</h2>
        <p>
          We collect personal information that you provide when you register on our site, subscribe to our
          newsletter, or use our services. This may include your name, email address, phone number, and other
          relevant information.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>2. How We Use Your Information</h2>
        <p>
          The information we collect is used to improve our services, process transactions, send promotional emails,
          and respond to inquiries. We may also use your information for analytics purposes to improve user experience.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>3. Data Protection</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data from
          unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the
          internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>4. Third-Party Services</h2>
        <p>
          We may use third-party services such as analytics providers and advertising partners. These third parties may
          collect and process information about your use of our site. We recommend reviewing the privacy policies of
          these third parties to understand how they handle your information.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>5. Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be reflected on this page, and the
          effective date will be updated accordingly. Please review this page periodically for any updates.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about this privacy policy or the handling of your personal data, feel
          free to contact us at:
        </p>
        <p>
          Email: <a href="mailto:contact@zuditt.com" className={styles.link}>contact@zuditt.com</a>
        </p>
        <p>Phone: <a href="tel:+911234567890" className={styles.link}>+91 123 456 7890</a></p>
        <p>Address: KMC 18 - 289 D City Mall Building, MG Road, Kasaragod, Kerala, India</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;