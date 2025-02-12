import React from 'react';
import styles from './TermsConditions.module.css';

const TermsConditions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>
      <p className={styles.intro}>
        Welcome to Zuditt Ai Innovation LLP. These terms and conditions outline the rules and regulations for the use of our website and services.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>1. Introduction</h2>
        <p>
          By accessing this website or using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you must not use our website or services.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>2. Use of Website</h2>
        <p>
          You may use our website for lawful purposes only. You agree not to use the website in any manner that could harm, disable, overburden, or impair the website or interfere with any other party's use of the website.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>3. User Content</h2>
        <p>
          Any content you submit, post, or otherwise make available through our website must not infringe upon the intellectual property rights of others. You are responsible for the content you upload and agree to indemnify Zuditt Ai Innovation LLP for any violations.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>4. Privacy Policy</h2>
        <p>
          Our Privacy Policy explains how we collect, use, and protect your personal data. By using our website, you consent to the practices described in our Privacy Policy.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>5. Termination</h2>
        <p>
          We may suspend or terminate your access to our website and services at any time, without notice, if we believe you have violated these terms and conditions.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>6. Limitation of Liability</h2>
        <p>
          Zuditt Ai Innovation LLP is not liable for any damages or losses that may occur from using our website or services. This includes direct, indirect, incidental, special, or consequential damages.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>7. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in India.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>8. Changes to Terms</h2>
        <p>
          We reserve the right to modify or update these terms and conditions at any time. Any changes will be posted on this page with an updated "Effective Date." By continuing to use the website after changes are posted, you agree to the new terms.
        </p>
      </div>

      <div className={styles.bottom}>
        <p>Effective Date: January 1, 2024</p>
      </div>
    </div>
  );
};

export default TermsConditions;