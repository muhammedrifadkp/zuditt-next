"use client";
import { useEffect } from "react";

import styles from "./page.module.css";
import "../globals.css";
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
            <h1 className={styles.pageTitle}>LOGO DESIGN AND BRANDING</h1>
            <br />
            <p className={styles.paragraph}>
              creates a unique visual identity through logos, color schemes, and
              brand elements to enhance recognition and customer connection.
            </p>
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.cardContent}>
            <p className={styles.cardParagraph}>
              Build a unique and powerful logo that reflects your company’s
              unique identity with the right mixture of creativity and strategy.
              Along with capturing your vision, our skilled designers know how
              to create logos which are visibly appealing, ageless, and
              adaptable. If you want a modern sleek look, a sophisticated
              elegant feel, or a striking bold look, we will design a logo that
              not only captures attention but also leaves an indelible impact.
              We will elevate your brand with a logo that exudes elegance and
              character while carefully applying quality design, and color and
              typography specificity to give your brand the voice it needs.
              Increase the power of your brand identity and let it shine with a
              powerful logo that is designed to stand out.
            </p>
          </div>
          <div className={styles.cardImage}>
            <img src="/LogoDesignBranding/logo.webp" alt="SEO Optimization" />
          </div>
        </div>
<div className={styles.cardsection11}>

        <div className={styles.section} data-aos="fade-up">
          <div className={styles.technologyGrid}>
            <div className={styles.technologyItem}>
              <h3> Creates Strong Brand Identity
              </h3>
              <p>
              A well-designed logo helps businesses establish a unique identity, making them easily recognizable and memorable in the market.


              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3> Builds Trust and Professionalism
              </h3>
              <p>
              A high-quality logo reflects credibility and professionalism, instilling confidence in customers and setting the foundation for strong brand perception.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Enhances Brand Recognition
              </h3>
              <p>
              A visually appealing and consistent logo ensures customers can quickly associate it with the business, fostering long-term brand recall and loyalty.
              </p>{" "}
            </div>
          </div>
        </div>
        </div>

        <div className={styles.cardSection22} data-aos="fade-up">
          <div className={styles.cardImage}>
            <img src="/LogoDesignBranding/brand.webp" alt="SEO Optimization" />
          </div>
          <div className={styles.cardContent}>
            <p className={styles.cardParagraph}>
              We make captivating brand identities that inspire and engage at
              Zuditt AI Innovation. From logos, brand strategy, social media
              branding, to marketing collateral, we ensure that the design is
              memorable and cohesive. With strategy at the core of our team’s
              creativity, we ensure that there is a unique brand presence that
              stands out from the competition, whether it’s a new or existing
              brand that is being launched. Let us change the way your brand is
              perceived and use our expertise to leave a positive impression.
            </p>
          </div>
        </div>

     
<div className={styles.cardsection23}></div>
        <div className={styles.section} data-aos="fade-up">
          <div className={styles.technologyGrid}>
            <div className={styles.technologyItem}>
              <h3> Establishes a Unique Market Position
              </h3>
              <p>
              Strategic branding differentiates a business from competitors, helping it stand out and create a distinct identity in the industry.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3> Builds Emotional Connection
              </h3>
              <p>
              Effective branding creates a strong emotional bond with customers, fostering loyalty and long-term relationships with the audience.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Increases Business Value
              </h3>
              <p>
              A strong, well-defined brand enhances a company’s reputation, making it more appealing to customers, investors, and potential partners.
              </p>{" "}
            </div>
          </div>
        </div>

        <div className={styles.cardSection2}>
          <div className={styles.cardImage2} data-aos="fade-right">
            <img
              src="/LogoDesignBranding/logobrand.webp"
              alt="Backend Development"
            />
          </div>
          <div className={styles.cardContent2}>
            <h4 className={styles.cardTitle2} data-aos="fade-left">
            Why branding is important ?
            </h4>
<ul data-aos="fade-left">
  <li className={styles.backendList}>  First Impressions Matter: 
  Your brand is often the first thing people notice about your business. A strong name, logo, and overall aesthetic create a lasting impression.</li><br/><br/>
  <li className={styles.backendList}>  Builds Trust & Credibility: 
                A professional and consistent brand reassures customers that you are reliable, knowledgeable, and serious about what you do.
              </li><br/><br/>
  <li className={styles.backendList}> Differentiation from Competitors:
In a crowded market, branding helps you stand out. Unique visuals, messaging, and values set your business apart from similar services.
              </li><br/><br/>
  <li className={styles.backendList}> Consistency & Recognition: 
                A well-defined brand creates consistency across all touchpoints (website, social media, marketing materials), making it easier for people to recognize and remember you.
              </li><br/><br/>
  <li className={styles.backendList}>        Attracts Your Ideal Customers: 
A strong brand appeals to your target audience. It helps you connect with the right people who align with your mission and values.
       </li><br/><br/>
  <li className={styles.backendList}>  Increases Business Value: 
  A well-branded business has a higher perceived value, which can lead to better opportunities, partnerships, and even higher pricing for your services.</li><br/><br/>
  </ul>
         
          </div>
        </div>

       
      </div>
    </>
  );
}

export default DigitalMarketing;
