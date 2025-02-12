'use client';

import React, { useEffect, useState } from 'react';
import styles from './Service.module.css';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image'; // Import the Image component
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    heading: "WEBSITE DEVELOPMENT",
    description: "We specialize in building high-performance websites with modern design and seamless functionality. Whether you need a simple website or a complex web solution, we ensure a user-friendly, responsive, and scalable online presence.",
    image: "/serviceHome/devices.webp",
    width: 1600, // Use numbers for width and height
    height: 1300
  },
  {
    heading: "APP DEVELOPMENT",
    description: "We create innovative and user-friendly mobile applications that drive engagement and enhance business performance. Whether you're looking for iOS, Android, or cross-platform solutions, we deliver apps that are functional, scalable, and impactful.",
    image: "/serviceHome/app-dev-home.webp",
    width: 200,
    height: 200
  },
  {
    heading: "SOFTWARE DEVELOPMENT",
    description: "We develop powerful software solutions that enhance efficiency and performance. From web apps to enterprise systems, we ensure security, scalability, and seamless experiences. Whether you need automation or cloud solutions, we turn your vision into reality.",
    image: "/serviceHome/software-development-home.webp",
    width: 500,
    height: 300
  },
  {
    heading: "WHATSAPP AUTOMATION",
    description: "We provide WhatsApp automation to streamline communication, enhance engagement, and improve efficiency. From chatbots to bulk messaging and API integrations, our solutions automate responses, manage interactions, and boost sales effortlessly.",
    image: "/serviceHome/whatsap-automation-home.webp",
    width: 500,
    height: 300
  },
  // Add more services as needed
];

const Service = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

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

  const handleNext = () => {
    setAnimationClass(styles.fadeOut); // Apply exit animation
    setTimeout(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
      setAnimationClass(styles.fadeIn); // Apply entry animation
    }, 300); // Duration of exit animation
  };

  const handlePrev = () => {
    setAnimationClass(styles.fadeOut); // Apply exit animation
    setTimeout(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
      setAnimationClass(styles.fadeIn); // Apply entry animation
    }, 300);
  };

  const { heading, description, image, width, height } = services[currentServiceIndex];

  return (
    <section className={styles.service}>
      <h2 className={styles.title}>SERVICE</h2>
      <div className={styles.container}>
        <div className={styles.content} data-aos="fade-right">
          <h3 className={styles.heading}>
            {heading.split(" ").map((word, index) => (
              <span key={index} className={styles.word}>{word}</span>
            ))}
          </h3>
          <p className={styles.description}>{description}</p>
          <div className={styles.click}>CLICK
            <div className={styles.arrowContainer}>
              <div className={styles.arrow} onClick={handlePrev}>
                <FaArrowLeft />
              </div>
              <div className={styles.arrow} onClick={handleNext}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageSection} data-aos="fade-left">
          {/* Use the Image component for lazy loading */}
          <Image
            src={image}
            alt={heading}
            className={styles.devices}
            width={width}
            height={height}
            // No priority prop (lazy loaded by default)
          />
        </div>
      </div>
    </section>
  );
};

export default Service;