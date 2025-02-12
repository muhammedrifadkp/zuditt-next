import React from 'react';
import styles from './Careers.module.css';

const Careers = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Careers at Zuditt Ai Innovation LLP</h1>
      <p className={styles.intro}>
        Join a team of innovators at Zuditt Ai Innovation LLP. We’re looking for passionate, driven individuals who are eager to make an impact in the tech industry. Explore our current job openings and apply to be part of a growing company with limitless opportunities.
      </p>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Current Job Openings</h2>
        <ul className={styles.jobList}>
          <li className={styles.jobItem}>
            <h3>Software Developer</h3>
            <p>Location: Remote</p>
            <p>We are looking for an experienced software developer with a strong background in web technologies. You will work with a dynamic team to build innovative solutions.</p>
            <a href="/apply/software-developer" className={styles.applyBtn}>Apply Now</a>
          </li>
          <li className={styles.jobItem}>
            <h3>Digital Marketing Specialist</h3>
            <p>Location: Kasaragod, Kerala</p>
            <p>We’re seeking a digital marketing specialist to help promote our services and build brand awareness through creative campaigns.</p>
            <a href="/apply/digital-marketing" className={styles.applyBtn}>Apply Now</a>
          </li>
          <li className={styles.jobItem}>
            <h3>Business Analyst</h3>
            <p>Location: Kasaragod, Kerala</p>
            <p>We are looking for a business analyst to analyze market trends, gather business requirements, and help improve our business strategies.</p>
            <a href="/apply/business-analyst" className={styles.applyBtn}>Apply Now</a>
          </li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>Why Join Us?</h2>
        <p>
          At Zuditt Ai Innovation LLP, we believe in fostering a positive and inclusive work environment where every team member is encouraged to innovate and grow. We offer:
        </p>
        <ul className={styles.benefitsList}>
          <li>Competitive salary and benefits</li>
          <li>Flexible working hours and remote options</li>
          <li>Opportunities for personal and professional growth</li>
          <li>A dynamic, collaborative work environment</li>
          <li>Health and wellness programs</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.subTitle}>How to Apply</h2>
        <p>
          To apply for any of the above positions, please click the "Apply Now" button for the job you're interested in, or send your resume to <a href="mailto:careers@zuditt.com" className={styles.link}>careers@zuditt.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Careers;