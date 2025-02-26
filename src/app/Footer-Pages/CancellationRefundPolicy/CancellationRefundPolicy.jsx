import React from 'react';
import styles from './CancellationRefundPolicy.module.css';

const CancellationRefundPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Cancellation and Refund Policy</h1>
      <p className={styles.intro}>
        At Zuditt AI Innovations LLP, we strive to deliver high-quality services to our clients. However, we understand that there may be situations where cancellations or refunds are required.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Cancellation Policy</h2>
        <p>
          Customers can request a cancellation within 24 hours of making a payment, provided that work has not already started on the project.
          Once work has commenced, cancellations will not be entertained.
          To request a cancellation, please contact us at <a href="mailto:sales@zuditt.com" className={styles.link}> sales@zuditt.com</a> with your order details.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Refund Policy</h2>
        <p>
          We offer refunds under the following conditions:
        </p>
        <ul className={styles.list}>
          <li>If we fail to deliver the agreed service due to unavoidable circumstances, a partial or full refund may be provided based on the work completed.</li>
          <li>Refund requests must be made within 7 days of project commencement.</li>
          <li>Refunds will be processed within 7-10 business days through the original payment method.</li>
          <li>No refunds will be provided for services that have already been delivered or partially completed.</li>
        </ul>
        <p>
          For any refund-related queries, please reach out to <a href="mailto:sales@zuditt.com" className={styles.link}>sales@zuditt.com</a> or call us at <a href="tel:+917994730307" className={styles.link}>+91 79947 30307</a>.
        </p>
      </div>
    </div>
  );
};

export default CancellationRefundPolicy;