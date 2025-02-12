"use client";  // ✅ Now this is a Client Component

// import AOS from "aos";
// import "aos/dist/aos.css";

// import React, { useEffect } from 'react';
import '../globals.css'; 

import Hero from './hero/Hero';
import About from './About/About';
import Product from './Products/Product';
import Service from './Service/Service';
import styles from './Homepage.module.css';  // ✅ Import CSS
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import KeyProjects from './KeyProjects/KeyProjects';
import Industries from './Industries/Industries';
import ToolsTechStack from './ToolsTechStack/ToolsTechStack';
import Testimonials from './Testimonials/Testimonials';

export default function Homepage() {
    // useEffect
    // (() => {
    //   AOS.init({
    //     duration: 2000, // Animation duration in milliseconds
    //     easing: "ease-in-out", // Easing function
    //     once: false, // Trigger animation once (when scrolled into view)
  
    //   });
    // }, []);
    // useEffect(() => {
    //   AOS.refresh();
    // }, []);
  return (
    <div className={styles.homepageContainer}>  {/* ✅ Apply class */}
      <Hero />
      {/* <div data-aos="fade-up"> */}
      <About />
      {/* </div> */}
      <Product />
      <Service />
      <WhyChooseUs/>
      <KeyProjects/>
      <Industries/>
      <ToolsTechStack/>
      <Testimonials/>
    </div>
  );
}
