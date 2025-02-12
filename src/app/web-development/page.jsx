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
            <h1 className={styles.pageTitle}>WEB DEVELOPMENT</h1>
            <br />
            <p className={styles.paragraph}>
              Web development is the process of building and maintaining
              websites.
            </p>
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.cardContent}>
            <p className={styles.cardParagraph}>
              We specialize in creating high-performance websites tailored to
              your business needs using the latest technologies like React.js,
              Next.js, and Node.js. Our team ensures your website is fast,
              scalable, and user-friendly, with seamless front-end designs and
              secure back-end integrations. We prioritize responsiveness,
              ensuring your website performs flawlessly across all devices.
              Whether you need a landing page, e-commerce platform, or web
              application, we work with you to bring your vision to life and
              drive conversions.
              <p><br/>
                With a focus on performance optimization, SEO, and user
                experience, we help your website stand out and deliver long-term
                results.
              </p>
            </p>
          </div>
          <div className={styles.cardImage}>
            <img
              src="/WebDevelopment/webImage1.webp" 
              alt="SEO Optimization"
            />
          </div>
        </div>

        <div className={styles.webPage1}>
          <div className={styles.content}>
            <h1 className={styles.pageTitle} data-aos="fade-down">
              {" "}
              WEB DEVELOPMENT PROCESS
            </h1>
          </div>
        </div>
        <div className={styles.section} data-aos="fade-up">
          <div className={styles.technologyGrid}>
            <div className={styles.technologyItem}>
              <h3> Consultation and Strategy</h3>
              <p>
                We start by understanding your business, goals, and target
                audience. Through detailed consultations, we craft a custom
                strategy to ensure the website meets your objectives and user
                needs.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3> Design and User Experience (UX)</h3>
              <p>
                We create a user-friendly design with wireframes and prototypes,
                ensuring the site's structure aligns with your brand for a
                seamless user experience.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <h3>Development and Integration</h3>
              <p>
                After design approval, our developers build the site using
                modern technologies and integrate key features like contact
                forms, payment gateways, and CMS for smooth functionality..
              </p>{" "}
            </div>
            <div className={styles.technologyItem}>
              <h3>Testing, Launch, and Ongoing Support</h3>
              <p>
                Before launch, we test the website for performance,
                responsiveness, and compatibility. Once optimized, we go live
                and provide ongoing support and maintenance for long-term
                success.
              </p>{" "}
            </div>
          </div>
        </div>

        <div className={styles.cardSection2}>
          <div className={styles.cardImage2} data-aos="fade-right">
            <img
              src="/WebDevelopment/backend1.webp"
              alt="Backend Development"
            />
          </div>
          <div className={styles.cardContent2}>
            <h4 className={styles.cardTitle2} data-aos="fade-left">
              Front-end Development
            </h4>

            <div className={styles.backendLists} data-aos="fade-up">
              <span className={styles.para}>
                Front-end development focuses on building the user interface and
                ensuring a seamless, interactive experience on the website.
              </span>
              <br />
              <br />
              <div className={styles.backendList}>
                <b>Technology Used:</b>
              </div>{" "}
              <br />
              <div className={styles.backendLists}>
                <div className={styles.backendList}>
                  Languages: HTML, CSS, JavaScript, etc.
                  etc.
                </div>
                <br />
                
                <div className={styles.backendList}>
                  Frameworks/Libraries: React.js, Vue.js, Angular, Next.js, etc.
                </div>{" "}
                <br />
                <div className={styles.backendList}>
                  Tools: Webpack, Babel, etc.
                </div>{" "}
                <br />
                <br />
              </div>
            </div>
            <h4 className={styles.cardTitle2} data-aos="fade-up">
              Back-end Development
            </h4>

            <div className={styles.backendLists} data-aos="fade-up">
              <span className={styles.para}>
              Backend development handles the server-side logic, databases, and the processes that run behind the scenes to manage data, user authentication, and other key functionalities.</span>
              <br />
              <br />
              <div className={styles.backendList}>
                <b>Technology Used:</b>
              </div>{" "}
              <br />
              <div className={styles.backendLists}>
                <div className={styles.backendList}>
                  Languages: JavaScript (Node.js), Python, Ruby, PHP, Java, Go,
                  etc.
                </div>
                <br />
                <div className={styles.backendList}>
                  Databases: MySQL, PostgreSQL, MongoDB, Redis(for caching), etc.
                </div>{" "}
                <br />
                <div className={styles.backendList}>
                  Frameworks: Express.js (Node.js), Next.js, Django (Python), Ruby on
                  Rails, etc.
                </div>{" "}
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.webPage2} data-aos="fade-up">
          <div className={styles.content}>
            <h1 className={styles.pageTitle} data-aos="fade-left">
              WEB DEVELOPMENT IMPORTANCE
            </h1>
            <br />
            <p className={styles.paragraph} data-aos="fade-right">
            Web development is crucial for creating a strong online presence, ensuring a seamless user experience, and boosting brand credibility. A well-designed website helps attract customers,   improves search engine visibility, and supports your marketing efforts. It ensures security, responsiveness, and optimaL performance to drive business growth. <br />
            {" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DigitalMarketing;
