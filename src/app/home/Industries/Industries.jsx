import React from 'react';
import styles from './Industries.module.css';

const industries = [
  { name: 'FINTECH', icon: '/icons/fintech.png' },
  { name: 'REAL ESTATE', icon: '/icons/real-estate.png' },
  { name: 'ENERGY', icon: '/icons/energy.png' },
  { name: 'BANKING', icon: '/icons/banking.png' },
  { name: 'PHARMA', icon: '/icons/pharma.png' },
  { name: 'HEALTHCARE', icon: '/icons/healthcare.png' },
  { name: 'WELFARE', icon: '/icons/welfare.png' },
  { name: 'INSURANCE', icon: '/icons/insurance.png' },
  { name: 'ART', icon: '/icons/art.png' },
  { name: 'GOVERNMENT', icon: '/icons/government.png' },
  { name: 'ENTERTAINMENT', icon: '/icons/entertainment.png' },
  { name: 'GAMING', icon: '/icons/gaming.png' }
];

const Industries = () => {
  return (
    <section className={styles.industries}>
      <div className={styles.container}>
        <h2 className={styles.title}>INDUSTRIES WE CATER</h2>
        <div className={styles.grid}>
          {industries.map((industry, index) => (
            <div key={index} className={styles.industryItem}>
              <div className={styles.iconWrapper}>
                <img 
                  src={industry.icon} 
                  alt={industry.name} 
                  className={styles.icon}
                />
              </div>
              <span className={styles.label}>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
