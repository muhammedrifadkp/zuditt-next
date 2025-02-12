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
          <h1 className={styles.pageTitle}>CONTENT MARKETING</h1><br/>
          <p className={styles.paragraph}>
strategic approach to creating and distributing valuable, relevant, and consistent content to attract and engage a specific target audience.          </p>
        </div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.cardContent}>
          <p className={styles.cardParagraph}>
          Through our content marketing strategies, we help businesses grow by attracting, engaging, and converting their audiences. Our services include blog writing, online video production, social media posts, and articles that help with search engine optimization and improve online visibility. We tailor captivating and informative branding content to your business so that you remain consistently engaged with your digital audience. Using targeted strategies, we increase traffic, generate leads, and improve brand awareness. Work with us to build a remarkable content presence that connects with your audience and reflects positively in your business. 

          </p>
        </div>
        <div className={styles.cardImage} >
          <img src="/ContentMarketing/Types-of-Brand-Marketing-Strategy.webp"  alt="SEO Optimization"/>
        </div>
      </div>

      <div className={styles.webPage1}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-down"> CONTENT MARKETING INCLUDES</h1>
          
        </div>
      </div>

      <div className={styles.section} data-aos="fade-up">
        <div className={styles.technologyGrid}>
          <div className={styles.technologyItem}>
            <h3> Builds Trust and Authority</h3>
            <p>Content marketing helps businesses establish credibility and trust by providing valuable, relevant content that addresses the audience's needs and solves their problems.</p>
          </div>
          <div className={styles.technologyItem}>
          <h3>Drives Organic Traffic</h3>
          <p>By creating SEO-friendly content, businesses can improve their website’s search engine ranking, attracting more organic visitors and increasing brand visibility.</p>          </div>
          <div className={styles.technologyItem}>
          <h3>Generates Leads and Conversions</h3>
          <p>Effective content marketing nurtures relationships with potential customers, guiding them through the sales funnel and ultimately driving conversions and sales.</p>          </div>
        </div>
      </div>

      <div className={styles.cardSection2} >
        <div className={styles.cardImage2} data-aos="fade-right">
          <img src="/ContentMarketing/left image (4).webp" alt="Backend Development" />
        </div>
        <div className={styles.cardContent2}>
          <h4 className={styles.cardTitle2}  data-aos="fade-left">Types of content marketing</h4>
       
          
          < div className={styles.backendLists}  data-aos="fade-up">
          <div className={styles.backendList}><b>Videos: </b>Engaging visual content that can explain concepts, showcase products, or tell stories.</div> <br/><br/>
          <div className={styles.backendList}><b>Social Media Posts: </b>Short, shareable content designed to engage and interact with followers.</div><br/><br/>
          <div className={styles.backendList}><b>Podcasts: </b>Audio content that shares valuable insights, stories, or interviews for on-the-go learning.</div><br/><br/>

          <div className={styles.backendList}><b>Infographics: </b>Visual representations of information or data that are easy to digest and share.</div><br/><br/>
            < div className={styles.backendList}><b>Blog Posts: </b>Informative articles that help educate or entertain the audience while improving SEO.</div><br/><br/>
              <div className={styles.backendList}><b>eBooks: </b>Comprehensive, in-depth guides or resources used to capture leads and educate audiences.</div><br/><br/>
            </div>
            
        </div>
      </div>

      <div className={styles.webPage2} data-aos="fade-up">
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-left">Content marketing importance</h1><br/>
          <p className={styles.paragraph} data-aos="fade-right">
          Content marketing builds trust and authority by providing valuable content. It boosts visibility, drives organic traffic, improves SEO, and nurtures customer relationships, leading to higher conversions and loyalty. </p>
        </div>
      </div>
</div>
     
    </>
  );
}

export default DigitalMarketing;
