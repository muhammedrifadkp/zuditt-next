'use client'

import { useState, useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos"
import styles from "./page.module.css";
import '../globals.css'; 





const AboutUs = () => {
  const [animateImage2, setAnimateImage2] = useState(false);
  const [animateTextAndImage, setAnimateTextAndImage] = useState(false);

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      setAnimateImage2(true);
      setAnimateTextAndImage(true);
    }, 1000);
  }, []);

  return (
    <>
      <div className={styles.mainAbout}>
        <div
          className={styles.aboutPage1} 
          // style={{
          //   backgroundImage: "url('/aboutus/aboutBg.webp')",
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          //   backgroundRepeat: "no-repeat",
          //   backgroundColor: "rgba(0, 0, 0, 0.8)",
          //   backgroundBlendMode: "multiply",
          //   height: "93vh",
          // }}
        >
          <div className={styles.stageContainer}>
            <div className={styles.stage2}>
              <div className={styles.aboutContent}>
                <h1
                  className={`${styles.aboutTitle} ${
                    animateTextAndImage ? styles.animate : ""
                  }`}
                >
                  ABOUT US
                </h1>
                <h2
                  className={`${styles.aboutSubtitle} ${
                    animateTextAndImage ? styles.animate : ""
                  }`}
                >
                  Welcome to Zuditt AI Innovations LLP
                </h2>
                <div className={styles.imageWrapper}>
                  <img
                    src="/aboutus/group-positive-young-people-posing-together.webp"
                    alt="Team"
                    className={`${styles.stage2Image} ${
                      animateImage2 ? styles.animate : ""
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.pageContainer}>
          <div className={styles.contentWrapper}>
            <h1
              className={styles.mainTitle}
              // data-aos="flip-up"
              // data-aos-duration="1000"
              // data-aos-delay={100}
            >
              Get to know us
            </h1>

            <h3
              className={styles.subtitle1}
              // data-aos="fade-in"
              // data-aos-duration="1000"
              // data-aos-delay={150}
            >
              Empowering Businesses Through AI and Innovation
            </h3>

            <div
              className={styles.textContent}
              data-aos="fade-in"
              data-aos-duration="2000"
              data-aos-delay={180}
            >
              <p>
                Welcome to Zuditt AI Innovation LLP, a forward-thinking
                technology company committed to transforming businesses through
                cutting-edge artificial intelligence (AI) and innovative
                solutions. Established to bridge the gap between technology and
                business, we are proud to offer diverse services that empower
                companies to thrive in today's rapidly evolving digital
                landscape.
              </p>

              <p>
                Headquartered in Kasaragod, Kerala, India, Zuditt AI Innovation
                LLP is driven by a passion for delivering world-class solutions
                that align with our clients strategic goals. Our mission is
                simple: to provide tailored AI-driven solutions that streamline
                business processes, enhance customer experiences, and drive
                measurable growth.
              </p>

              <div className={styles.journeySection}>
                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={170}
                >
                  Our journey
                </h3>

                <p>
                Founded by Salman Farize and Hakeem, visionary entrepreneurs with a shared background in International Business Management, Zuditt ​AI Innovation LLP was born out of a desire to harness the power of AI to solve complex business challenges. What started as a small-scale ​operation has quickly grown into a dynamic and innovative company with a global reach.
                </p>

                <p>
                Our journey has been one of constant growth, learning, and adaptation. We have worked with companies of all sizes, from startups looking ​for an edge in the marketplace to well-established businesses aiming to optimize their operations. Every step of the way, we have remained ​true to our core values of innovation, quality, and collaboration.
                </p>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={180}
                >
                  Our Mission
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={200}
                >
                  At Zuditt AI Innovation LLP, we are committed to helping
                  businesses of all sizes unlock their full potential. Our
                  mission is to integrate cutting-edge AI solutions into every
                  aspect of business, enabling our clients to achieve their
                  goals with greater efficiency, accuracy, and insight. Whether
                  it's automating routine tasks, developing intelligent web and
                  mobile applications, or providing comprehensive digital
                  marketing strategies, we aim to be a catalyst for business
                  success.
                </p>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100}
                >
                  Our mission can be summarized in three key goals:
                  <br />
                  AI-powered solutions that empower companies to enhance
                  operations and stay competitive in their industries.
                  <br />
                  Deliver Innovation: Continuously innovate and
                  adapt to the latest technological advancements to deliver
                  future-proof solutions.
                  <br />
                  Drive Growth: Enable clients to achieve
                  measurable business growth by improving efficiency, reducing
                  costs, and enhancing customer satisfaction.
                </p>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={190}
                >
                  Our Vision
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100}
                >
                  Our vision is to become a global leader in AI-driven business
                  solutions, providing the tools and insights that companies
                  need to excel in an increasingly digital world. We envision a
                  future where AI and automation are seamlessly integrated into
                  the business processes of every company, from startups to
                  multinational enterprises.
                  <br />
                  <br />
                  At Zuditt AI Innovation LLP, we believe that AI is not just a
                  tool for efficiency. It's a transformative force that can
                  revolutionize entire industries. By pushing the boundaries of
                  what's possible with AI, we aim to inspire innovation and
                  foster long-lasting partnerships with our clients.
                </p>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={190}
                >
                Our Core Values
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100}
                >
                Innovation: We believe in the power of innovation to drive success. Our solutions are designed to push the boundaries of what's possible, ​using cutting-edge technology to solve real-world problems.<br/>

               Collaboration: We work closely with our clients to understand their unique needs and objectives, creating custom solutions that align with ​their business goals.<br/>

                Integrity: Transparency and honesty are at the heart of everything we do. We are committed to building trust with our clients by delivering on ​our promises and maintaining open communication.<br/>

                Excellence: We strive for excellence in everything we do, from the quality of our services to the satisfaction of our clients. Our team is ​dedicated to delivering top-tier results every time.<br/>

               Sustainability: We are conscious of our responsibility to the environment and society. As a company, we seek to create sustainable ​solutions that contribute positively to the communities in which we operate.<br/>

                </p>

                <h3
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay={190}
                >
                Our Services
                </h3>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100}
                >
                 At Zuditt AI Innovation LLP, we offer a comprehensive range of services designed to help businesses harness the power of AI and ​automation. Our expertise spans across various industries, and we tailor our services to meet the specific needs of each client.
                 <br/>   
                 <br/>

                 <strong>1. AI Business Automation:</strong>
                 <br/>
                 Our AI-driven automation solutions are designed to streamline operations, reduce manual effort, and improve overall efficiency. From ​automating customer support to optimizing internal workflows, we help businesses save time and resources by leveraging intelligent ​automation tools.
                <br/>

                 <strong>2. Custom Web and App Development:</strong><br/>
                  We specialize in developing AI-integrated web and mobile applications that deliver personalized user experiences and advanced ​functionalities. Whether you need a custom e-commerce platform or a complex enterprise solution, our team of developers ensures your ​digital presence is both powerful and scalable.
                  <br/>
         
                 <strong>3. Digital Marketing:</strong>
                 In today's digital world, a strong online presence is essential for business growth. Our digital marketing services are designed to boost your ​visibility, engage your target audience, and drive conversions. We offer SEO, social media marketing, pay-per-click advertising, and more to ​ensure your brand stands out in a crowded marketplace.
                 <br/>
                 <strong>4. WhatsApp Automation:</strong><br/>
                 Effective communication is key to customer satisfaction. With our WhatsApp automation solutions, businesses can automate responses, ​manage inquiries, and streamline customer service processes. This not only improves customer experiences but also frees up valuable time ​for your support team.
                 <br/>
                 <br/> 
                 Expertise in AI: With a team of skilled professionals experienced in artificial intelligence, we are at the forefront of delivering innovative AI ​solutions that are both practical and effective.<br/>

                Customized Solutions: We understand that no two businesses are alike. That's why we take the time to get to know your business and tailor ​our solutions to meet your specific needs and objectives.<br/>
                 Proven Track Record: We have successfully partnered with a range of businesses, from startups to established enterprises, helping them to ​streamline operations, improve customer satisfaction, and drive growth.<br/>
                Global Reach with Local Roots: While we operate globally, we stay true to our roots. Our commitment to providing high-quality solutions ​stems from our deep understanding of the business challenges faced by companies in various regions, including India, the UK, and beyond.
                <br/>
                Commitment to Customer Success: Your success is our success. We are dedicated to helping our clients achieve their business goals by ​providing ongoing support and guidance every step of the way.
                <br/>
                </p>

              </div>
            </div>
          </div>
        </div>

        <div
          className={styles.aboutContainer1}
          data-aos="fade-in"
          data-aos-duration="1000"
          data-aos-delay={200}
        >
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h1>350+</h1>
              <p>HAPPY CUSTOMER</p>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <h1>120+</h1>
              <p>PROJECTS</p>
            </div>
            <div className={styles.divider} />
            <div className={styles.stat}>
              <h1>4.9/5</h1>
              <p>REVIEW RATE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;