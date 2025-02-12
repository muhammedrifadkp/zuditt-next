import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './KeyProjects.module.css';

const KeyProjects = () => {
  // Images stored in the public folder
  const mobileImages = [
    '/key-projects/mobile-image-1.png',
    '/key-projects/mobile-image-2.png',
    '/key-projects/mobile-image-3.png',
    '/key-projects/mobile-image-4.png',
    '/key-projects/mobile-image-5.png',
  ];

  const laptopImages = [
    '/key-projects/laptop-image-1.png',
    '/key-projects/laptop-image-2.png',
    '/key-projects/laptop-image-3.png',
    '/key-projects/laptop-image-4.png',
    '/key-projects/laptop-image-5.png',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const thumbnailRefs = useRef([]);

  // When the active thumbnail changes, scroll it into view (centered)
  // useEffect(() => {
  //   if (thumbnailRefs.current[activeIndex]) {
  //     thumbnailRefs.current[activeIndex].scrollIntoView({
  //       behavior: 'smooth',
  //       inline: 'center',
  //       block: 'nearest'
  //     });
  //   }
  // }, [activeIndex]);

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? laptopImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % laptopImages.length);
  };

  return (
    <section className={styles.keyProjects}>
      <div className={styles.container}>
        <h2 className={styles.title}>OUR KEY PROJECTS</h2>
        <p className={styles.description}>
          We take pride in delivering innovative and impactful solutions.
        </p>
        <div className={styles.carouselWrapper}>
          {/* Background image with fade-in animation */}
          <div
            key={activeIndex}
            className={`${styles.backgroundImage} ${styles.fadeIn}`}
            style={{ backgroundImage: `url(${laptopImages[activeIndex]})` }}
          />
          {/* Navigation buttons */}
          <button className={`${styles.navButton} ${styles.prev}`} onClick={handlePrev}>
            &#10094;
          </button>
          <button className={`${styles.navButton} ${styles.next}`} onClick={handleNext}>
            &#10095;
          </button>
          {/* Thumbnails using Next.js Image component */}
          <div className={styles.thumbnails}>
            {mobileImages.map((image, index) => (
              <div
                key={index}
                ref={(el) => (thumbnailRefs.current[index] = el)}
                className={`${styles.thumbnailWrapper} ${
                  activeIndex === index ? styles.active : ''
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <Image
                  src={image}
                  alt={`Mobile View ${index + 1}`}
                  width={100}
                  height={200}
                  className={styles.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyProjects;
