import React from 'react';
import styles from './Leadership.module.css';

const Leadership = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Leadership</h1>
      <p className={styles.description}>
        Meet the visionary leaders driving innovation and growth at our company. Our leadership team brings
        a wealth of experience, expertise, and a commitment to excellence in everything we do.
      </p>

      <div className={styles.leaders}>
        <div className={styles.leader}>
          <div className={styles.imageWrapper}>
            <img src="/Leaders/salman.jpg" alt="Leader 1" className={styles.leaderImage} />
            <div className={styles.overlay}></div>
          </div>
          <h3 className={styles.leaderName}>Salman Farize</h3>
          <p className={styles.leaderTitle}>Founder & CEO</p>
          <p className={styles.leaderBio}>
            Salman Farize, the founder and CEO of Zuditt AI Innovation LLP, is a passionate entrepreneur with a strong background in International Business Management. Originally from Kasaragod, Kerala, Salman has led Zuditt from its roots in India to a global presence.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className={styles.leader}>
          <div className={styles.imageWrapper}>
            <img src="/Leaders/hakeem.jpg" alt="Leader 2" className={styles.leaderImage} />
            <div className={styles.overlay}></div>
          </div>
          <h3 className={styles.leaderName}>Abdul Hakeem</h3>
          <p className={styles.leaderTitle}>Co-Founder & COO</p>
          <p className={styles.leaderBio}>
            Abdul Hakeem, Co-Founder and COO of Zuditt AI Innovation LLP, is a driving force behind the company’s operations and growth. With a strong background in management and a passion for innovation, Hakeem ensures that Zuditt delivers exceptional AI solutions to clients worldwide.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className={styles.leader}>
          <div className={styles.imageWrapper}>
            <img src="/Leaders/yousaf.jpg" alt="Yousuf Meethal" className={styles.leaderImage} />
            <div className={styles.overlay}></div>
          </div>
          <h3 className={styles.leaderName}>Yousuf Meethal</h3>
          <p className={styles.leaderTitle}>Co-Founder & CSO</p>
          <p className={styles.leaderBio}>
            Yousuf Meethal, as the Chief Strategy Officer of Zuditt AI Innovation LLP, plays a crucial role in shaping the company's vision and strategic direction. With a deep understanding of AI-driven markets, Yousuf ensures that Zuditt remains at the forefront of industry advancements.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className={styles.leader}>
          <div className={styles.imageWrapper}>
            <img src="/Leaders/harshad.jpg" alt="Mohammed Harshad A" className={styles.leaderImage} />
            <div className={styles.overlay}></div>
          </div>
          <h3 className={styles.leaderName}>Mohammed Harshad A</h3>
          <p className={styles.leaderTitle}>Co-Founder & CFO</p>
          <p className={styles.leaderBio}>
            Mohammed Harshad A, the Chief Financial Officer of Zuditt AI Innovation LLP, oversees the financial operations and strategic investments of the company. With extensive experience in financial planning and risk management, Harshad ensures Zuditt's financial health and sustainability.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;