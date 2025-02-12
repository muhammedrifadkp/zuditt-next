

'use client'
import styles from './WhyChooseUs.module.css';

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

const WhyChooseUs = () => {
   useEffect(() => {
      AOS.init({
        duration: 2000,
        easing: "ease-in-out",
        once: false,
      });
    }, []);
  
    useEffect(() => {
      AOS.refresh();
    }, []);
  
  return (
    <section className={styles.whyChooseUs}>
      <div className={styles.container}>
        <div className={styles.content}  data-aos="fade-up" >
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>EXPERTISE IN AI</h3>
            <p className={styles.featureText}>
              Our team brings extensive knowledge and experience in artificial intelligence, 
              ensuring that our solutions are both cutting-edge and future-proof.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>TAILORED SOLUTIONS</h3>
            <p className={styles.featureText}>
              We understand that every business is unique, and we customize our services 
              to meet your specific needs and objectives.
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>COMMITMENT TO EXCELLENCE</h3>
            <p className={styles.featureText}>
              We are dedicated to delivering the highest quality services and ensuring 
              complete client satisfaction.
            </p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <h2 className={styles.title}  data-aos="fade-left">WHY<br />CHOOSE US</h2>
          <img src="/robot copy.png" alt="AI Robot" className={styles.robotImage}  data-aos="fade-left" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
