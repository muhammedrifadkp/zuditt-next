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
          <h1 className={styles.pageTitle}>SOFTWARE DEVELOPMENT</h1><br/>
          <p className={styles.paragraph}>
          the process of creating software applications that run on mobile devices like smartphones and tablets.</p>

        </div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.cardContent}>
          <p className={styles.cardParagraph}>
          Our team specializes in building high-quality software solutions tailored to your business needs. We design and develop secure, scalable, and efficient applications for web, mobile, and enterprise systems. From planning to deployment, we ensure seamless performance, intuitive design, and robust functionality, helping your business innovate and grow.
          </p>
        </div>
        <div className={styles.cardImage} >
          <img src="/softwareDevelopment/software-right.webp" alt="SEO Optimization"/>
        </div>
      </div>

      <div className={styles.webPage1}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-down"> SOFTWARE DEVELOPMENT INCLUDES</h1>
          
        </div>
      </div>
      <div className={styles.section} data-aos="fade-up">
        <div className={styles.technologyGrid}>
          <div className={styles.technologyItem}>
            <h3>  Web and Mobile Development</h3>
            <p>Software development is essential for building and maintaining websites, web applications, and custom mobile apps that engage users and streamline business processes.</p>
          </div>
          <div className={styles.technologyItem}>
          <h3>Enterprise Solutions</h3>
          <p>Software development creates systems for managing business operations, such as CRM, ERP, and accounting, improving efficiency and decision-making.</p>          </div>
          <div className={styles.technologyItem}>
          <h3>Advanced Technologies</h3>
          <p>Software plays a key role in developing AI, machine learning models, and game development, enabling innovation and enhanced user experiences across industries.</p>          </div>
        </div>
      </div>

      <div className={styles.cardSection2} >
        <div className={styles.cardImage2} data-aos="fade-right">
          <img src="/softwareDevelopment/softwareleft.webp" alt="Backend Development" />
        </div>
        <div className={styles.cardContent2}>
          <h4 className={styles.cardTitle2} >Key points of Software development</h4>
       
          
          <div className={styles.backendLists} data-aos="fade-up">
            <div className={styles.backendList}><b>Problem Solving: </b></div><br/><span> Software development provides solutions to specific business or user problems, automating tasks, improving efficiency, and addressing user needs.</span><br/><br/>
            <div className={styles.backendList}><b>Business Growth: </b></div> <br/><span>Custom software enables businesses to scale by optimizing operations, improving customer service, and creating innovative products or services. </span><br/><br/>
            <div className={styles.backendList}><b>Competitive Advantage: </b></div><br/><span> Developing unique software can differentiate businesses from competitors, offering better user experiences and tailored functionalities.</span><br/><br/>
            <div className={styles.backendList}><b>Data Management: </b></div><br/><span>Software helps businesses manage, process, and analyze data, which can lead to better decision-making and improved performance. </span><br/><br/>
            <div className={styles.backendList}><b>Automation: </b></div><br/><span> Automation through software reduces manual effort, minimizes errors, and streamlines repetitive tasks, saving time and resources. </span><br/><br/>

            </div>
        </div>
      </div>

      <div className={styles.webPage2} data-aos="fade-up">
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-left">SOFTWARE DEVELOPMENT IMPORTANCE</h1><br/>
          <p className={styles.paragraph} data-aos="fade-right">
        

Software development is essential for tailored solutions that enhance efficiency, scalability, and innovation. It streamlines processes, provides a competitive edge, enables data-driven decisions, and automates tasks to reduce errors and save time.  </p>
          
        </div>
      </div>
</div>
     
    </>
  );
}

export default DigitalMarketing;
