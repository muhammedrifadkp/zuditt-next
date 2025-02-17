import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true only on the client
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.circuitPattern}>
        <Image
          src="/home/background.jpg"
          alt="Circuit Background"
          className={styles.backgroundImage}
          layout="fill"
          objectFit="cover"
          quality={75}
          priority // Preload critical image
        />
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <p className={styles.subDescription}>Empowering Future-Ready Businesses with</p>
          <h1 className={styles.title}>ZUDITT AI</h1>
          <h2 className={styles.subtitle}>INNOVATION</h2>
          <h2 className={styles.subtitle}>LLP</h2>
          <p className={styles.description}>Get a quote or set up a consultation.</p>

          <a href="https://wa.me/917994730307" target="_blank" rel="noopener noreferrer">
            <button className={styles.ctaButton}>Get a quote</button>
          </a>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/home/robot.png"
            alt="AI Robot"
            className={styles.robotImage}
            width={500}
            height={500}
            quality={75}
            priority // Preload critical image
          />
        </div>
      </div>

      {/* Non-Critical Images (Lazy Loaded) */}
      {isClient && ( // Render only on the client
        <div className={styles.nonCriticalImages}>
          <Image
            src="/home/non-critical-image-1.jpg"
            alt="Non-Critical Image 1"
            width={300}
            height={200}
            quality={75}
          />
          <Image
            src="/home/non-critical-image-2.png"
            alt="Non-Critical Image 2"
            width={300}
            height={200}
            quality={75}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;