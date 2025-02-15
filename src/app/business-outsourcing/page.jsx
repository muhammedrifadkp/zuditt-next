'use client'
import { useEffect } from "react";

import styles from "./page.module.css";
import '../globals.css'; 
import AOS from "aos";
import "aos/dist/aos.css";





function DigitalMarketing() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
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
          <h1 className={styles.pageTitle}>BUSINESS OUTSOURCING</h1><br/>
          <p className={styles.paragraph}>
          Business outsourcing involves partnering with external organizations to manage tasks or services previously <br/>handled in-house, improving efficiency and reducing costs. </p>        </div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.cardContent}>
          <p className={styles.cardParagraph}>
          Outsourcing has never been easier! Our services allow you to improve business processes and boost overall performance, while cutting down on costs. We cater to various sets of functions, such as customer help and support, data entry, IT management, accounting, and other administrative duties. With our team managing these secondary functions, we enable you to concentrate on more pressing matters. 

          </p>
        </div>
        <div className={styles.cardImage} >
          <img src="/BusinessOutsourcing/businessOutsourceRight.webp"  alt="SEO Optimization"/>
        </div>
      </div>

      <div className={styles.webPage1}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-down"> Core Advantages of Business Outsourcing</h1>
          
        </div>
      </div>

      <div className={styles.section} data-aos="fade-up">
        <div className={styles.technologyGrid}>
        <div className={styles.technologyItem}>
            <h3> Types of Outsourcing</h3>
            <p>
            Businesses outsource functions like accounting, IT services, BPO, KPO, manufacturing, and project-specific tasks.</p>
          </div>
          <div className={styles.technologyItem}>
            <h3> Benefits of Outsourcing</h3>
            <p>Outsourcing offers cost savings, access to global expertise, better focus on core tasks, scalability, improved efficiency, and risk management.</p>
          </div>
          <div className={styles.technologyItem}>
          <h3>Purpose of Outsourcing</h3>
          <p> It allows companies to delegate non-core tasks to experts, focusing on strategic goals while maintaining high-quality outcomes.</p>          </div>
          
        </div>
        
        
      </div>

      <div className={styles.cardSection2} >
        <div className={styles.cardImage2} data-aos="fade-right">
          <img src="/BusinessOutsourcing/businee-outsourcing-left.webp" alt="Backend Development" />
        </div>
        <div className={styles.cardContent2}>
          <h4 className={styles.cardTitle2} data-aos="fade-left">Steps to Successful Outsourcing</h4>
       
          
          <div className={styles.backendLists} data-aos="fade-up">
            <div className={styles.backendList}><b>Identify Needs: </b></div><br/><span className={styles.para}>Define the tasks or processes to outsource. Assess the benefits and risks of outsourcing them.</span><br/><br/>
            <div className={styles.backendList}><b>Choose the Right Partner: </b></div> <br/><span className={styles.para}> Research providers and check reviews or testimonials. Ensure they align with your business goals and values.</span><br/><br/>
            <div className={styles.backendList}><b>Establish Clear Contracts: </b></div><br/><span className={styles.para}> Clearly define expectations, deliverables, timelines, and costs.
            Include provisions for data security and confidentiality.</span><br/><br/>
            <div className={styles.backendList}> <b>Maintain Communication : </b></div><br/><span className={styles.para}>Regularly review progress with the outsourcing team. Use project management tools for seamless collaboration. </span><br/><br/>
            <div className={styles.backendList}><b>Monitor Performance: </b></div><br/><span className={styles.para}>Track key performance indicators (KPIs) to measure success.
            Address issues promptly to maintain quality. </span><br/><br/>
            
            </div>

            
        </div>
      </div>

      <div className={styles.webPage2} data-aos="fade-up">
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-left">COMMONLY OUTSOURCED BUSINESS FUNCTIONS</h1><br/>
          <p className={styles.paragraph} data-aos="fade-right">
      

Businesses commonly outsource administrative tasks (data entry, payroll, HR), IT services (software development, system maintenance, support), marketing (SEO, content creation, social media), and customer support (call centers, live chat, email handling) to enhance efficiency and brand visibility.
          </p>
        </div>
      </div>
</div>
     
    </>
  );
}

export default DigitalMarketing;
