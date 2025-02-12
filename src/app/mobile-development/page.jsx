'use client'
import { useEffect } from "react";

import styles from "./page.module.css";
import '../globals.css'; 
import AOS from "aos";
import "aos/dist/aos.css";





function DigitalMarketing() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Trigger animation once (when scrolled into view)

    });
  }, []);
  useEffect(() => {
    AOS.refresh();
  }, []);
  
  return (
    <>
            <div className={styles.mainContainer}>

      <div className={styles.webPage}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>MOBILE DEVELOPMENT</h1><br/>
          <p className={styles.paragraph}>
          the process of creating software applications that 
              run on mobile devices like smartphones and 
              tablets.</p>

        </div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.cardContent}>
          <p className={styles.cardParagraph}>
          Our team specializes in building high-quality mobile applications
              tailored to your business needs. We design and develop apps that
              deliver seamless performance on iOS (Apple) and Android (Google)
              devices, ensuring a user-friendly experience. Whether it's a
              simple app or a feature-rich mobile solution, we create custom
              applications that optimize performance, boost engagement, and help
              your business reach its goals. Our mobile development process
              focuses on intuitive design, smooth functionality, and
              scalability, allowing your app to evolve with your business.
          </p>
        </div>
        <div className={styles.cardImage} >
          <img src="/MobileDevelopment/mobile-app-development.webp" alt="SEO Optimization"/>
        </div>
      </div>

      <div className={styles.webPage1}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-down"> MOBILE DEVELOPMENT INCLUDES</h1>
          
        </div>
      </div>
      <div className={styles.section} data-aos="fade-up">
          <div className={styles.technologyGrid}>
            <div className={styles.technologyItem}>
              <h3> Designing the App Interface</h3>
              <p>
                Creating an intuitive, user-friendly experience (UI/UX) is
                crucial for mobile apps due to the small screen sizes and
                varying user interactions on touch devices
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3> Programming</h3>
              <p>
                Writing the code that powers the app’s functionality. This
                involves the logic for user interactions, data processing,
                networking, and integration with various hardware and software
                features of the device.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Testing</h3>
              <p>
                Ensuring the app functions correctly, is free of bugs, and
                provides a smooth user experience. Testing may involve usability
                testing, performance testing, and compatibility testing across
                different devices.
              </p>{" "}
            </div>
          </div>
        </div>

      <div className={styles.cardSection2} >
        <div className={styles.cardImage2} data-aos="fade-right">
          <img src="/MobileDevelopment/mobileType.webp" alt="Backend Development" />
        </div>
        <div className={styles.cardContent2}>
            <h4 className={styles.cardTitle2} data-aos="fade-left">
              Types of Mobile Development
            </h4>

            <div className={styles.backendLists} data-aos="fade-up">
              <div className={styles.backendList}> Native Mobile Development:
              </div>
              <br />
              <span className={styles.para}>
              Apps are developed specifically for one platform (iOS or
                Android) using platform-specific programming languages.
              </span>
              <br />
              <br />
              <div className={styles.backendList}>Cross-Platform Development
              :</div> <br />
              <span className={styles.para}>
                {" "}
                Apps are built using a single codebase that works on both iOS and Android.
                </span>
              <br />
              <br />
              <div className={styles.backendList}>Hybrid Mobile Development:</div>
              <br />
              <span className={styles.para}>
                {" "}
                Web technologies (HTML, CSS, JavaScript) are used to build the app, which is then wrapped in a native container, allowing it to run on mobile devices like a regular native app.
              </span>
              <br />
              <br />
              <div className={styles.backendList}>Progressive Web Apps (PWAs)
              :</div>
              <br />
              <span className={styles.para}>
              Web apps that offer a mobile app-like experience, and can be installed and used directly through the web browser without needing to go through the app store.
              {" "}
              </span>
              <br />
              <br />
              
             
             
              <br />
              <br />
            </div>
          </div>
      </div>

      <div className={styles.webPage2} data-aos="fade-up">
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-left">MOBILE APP CATEGORIES</h1><br/>
          <p className={styles.paragraph} data-aos="fade-right">
          Mobile apps are categorized by purpose, including social media for communication, gaming for entertainment, productivity for tasks, and lifestyle for fitness. Other key types include e-commerce, finance, travel, education, utilities, streaming, and specialized apps for health, real estate, and AR/VR.
        </p>
          
        </div>
      </div>
</div>
     
    </>
  );
}

export default DigitalMarketing;
