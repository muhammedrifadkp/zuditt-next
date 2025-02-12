'use client'
import { useEffect } from 'react';
import styles from './ServicePage.module.css';
import ServiceCircle from './ServiceCircle/ServiceCircle';

const services = [
  { name: 'APP DEVELOPMENT', position: 'topLeft' },
  { name: 'DIGITAL MARKETING', position: 'topRight' },
  { name: 'SOFTWARE DEVELOPMENT', position: 'center' },
  { name: 'WEBSITE DEVELOPMENT', position: 'bottomLeft' },
  { name: ' WHATSAPP AUTOMATION', position: 'bottomRight' },
  { name: 'BUSINESS AUTOMATION', position: 'bottomCenter' },
  { name: 'BUSINESS OUTSOURCING PROCESS', position: 'centerLeft' },
  { name: '', position: 'centerRight2' },
  { name: '', position: 'bottomRight2' },
  { name: '', position: 'bottomLeft2' }
];

const ServicePage = () => {
  useEffect(() => {
    // Add font loading
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className={styles.servicePage}>
      <div 
        className={styles.background}
        style={{
          backgroundImage: 'url("/service-bg.jpg")',
          backgroundColor: "rgba(0, 0, 0, 0.85)",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className={styles.text}>
          <h1>Service</h1>
        </div>
        <div className={styles.circles}>
          {services.map((service, index) => (
            <ServiceCircle
              key={index}
              name={service.name}
              position={service.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;