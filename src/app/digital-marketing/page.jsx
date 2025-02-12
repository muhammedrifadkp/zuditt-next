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
          <h1 className={styles.pageTitle}>DIGITAL MARKETING</h1><br/>
          <p className={styles.paragraph}>
          optimizes brand presence using search engines, content, social media, and ads to drive website <br/>traffic and customer engagement.
          </p>
        </div>
      </div>

      <div className={styles.cardSection}>
        <div className={styles.cardContent}>
          <p className={styles.cardParagraph}>
          At Zuditt AI Innovation, we don’t just follow trends—we create them. Our expert-driven marketing strategies are tailored to every business’s unique needs, ensuring maximum reach, engagement, and conversions. SEO management boosts rankings, audience engagement increases due to effective social media marketing, and focused PPC advertising generates quality traffic. Our content plans are persuasive enough to help a business acquire new clients, while nurturing WhatsApp campaigns are great for retention. We do all of this to make sure your brand is on everyone's lips: we optimize all campaigns to increase impressions. 
<p>
You can trust us to enhance your brand visibility, reach actual prospects, and foster a strong digital footprint both now and in the years to come.</p>
          </p>
        </div>
        <div className={styles.cardImage} >
          <img src="/DigitalMarketing/digital-right.webp" alt="SEO Optimization"/>
        </div>
      </div>

      <div className={styles.webPage1}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle} data-aos="fade-down"> DIGITAL MARKETING INCLUDES</h1>
          
        </div>
      </div>

      <div className={styles.section} data-aos="fade-up">
        <div className={styles.technologyGrid}>
        <div className={styles.technologyItem}>
            <h3> Analyzing and strategy building</h3>
            <p>
            We analyze data and build tailored strategies to optimize digital marketing performance and drive growth.</p>
          </div>
          <div className={styles.technologyItem}>
            <h3>  SEO (Search Engine Optimization)</h3>
            <p>SEO focuses on improving a website’s visibility on search engines by optimizing content and structure to drive organic traffic.</p>
          </div>
          <div className={styles.technologyItem}>
          <h3>Social Media Marketing</h3>
          <p>Social media marketing uses platforms like Facebook, Instagram, and Twitter to build brand awareness, engage customers, and promote products.</p>          </div>
          <div className={styles.technologyItem}>
          <h3>PPC (Pay-Per-Click) Advertising</h3>
          <p>PPC advertising involves paying for each click on ads displayed on search engines or social media platforms, offering a quick way to drive targeted traffic.</p>          </div>
        </div>
        
        
      </div>

      <div className={styles.cardSection2} >
        <div className={styles.cardImage2} data-aos="fade-right">
          <img src="/DigitalMarketing/digital-left.webp" alt="Backend Development" />
        </div>
        <div className={styles.cardContent2}>
          <h4 className={styles.cardTitle2} data-aos="fade-left">Key points of Digital marketing</h4>
       
          
          <div className={styles.backendLists} data-aos="fade-up">
            <div className={styles.backendList}>Wider Reach:</div><br/><span className={styles.para}>Digital marketing allows businesses to reach a global audience, breaking geographical barriers.</span><br/><br/>
            <div className={styles.backendList}>Cost-Effective:</div> <br/><span className={styles.para}> Compared to traditional marketing, digital marketing is often more affordable, allowing even small businesses to compete.</span><br/><br/>
            <div className={styles.backendList}>Measurable Results:</div><br/><span className={styles.para}> Digital campaigns provide real-time analytics, making it easier to track performance and adjust strategies.</span><br/><br/>
            <div className={styles.backendList}>Targeted Audience:</div><br/><span className={styles.para}>Digital marketing allows businesses to target specific demographics, ensuring that campaigns reach the right people. </span><br/><br/>
            <div className={styles.backendList}>Improved Conversion Rates:</div><br/><span className={styles.para}>Targeted campaigns and personalized content lead to
            higher conversion rates. </span><br/><br/>
            <div className={styles.backendList}>Flexibility and Adaptability:
            </div><br/><span className={styles.para}>Campaigns can be adjusted in real-time based on performance data. </span><br/><br/>
            </div>

            
        </div>
      </div>

      <div className={styles.webPage2}  data-aos="fade-up">
        <div className={styles.content}>
          <h1 className={styles.pageTitle}  data-aos="fade-left">Digital marketing importance</h1><br/>
          <p className={styles.paragraph}  data-aos="fade-right">
          Digital marketing is crucial today for reaching a broader audience at a lower cost. It allows businesses to target specific groups, track measurable results, and make quick adjustments.  </p>
        </div>
      </div>
</div>
     
    </>
  );
}

export default DigitalMarketing;
