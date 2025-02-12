import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import the Image component from next/image

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Trigger animation once (when scrolled into view)
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-left">
          <div className="robot-container" data-aos="fade-up">
            {/* Robot Image (Critical - Load Immediately) */}
            <Image
              src="/home-about/3d-delivery-robot-working.png" // Path relative to the public folder
              alt="AI Robots"
              className="robot-image"
              width={500} // Set width
              height={500} // Set height
              priority // Preload critical image
            />

            {/* Floating Icons (Non-Critical - Lazy Loaded) */}
            <div className="floating-icons">
              <div className="float-card card1">
                <Image
                  src="/home-about/image1.jpg" // Path relative to the public folder
                  alt="floating icon 1"
                  className="float-icon"
                  width={100} // Set width
                  height={100} // Set height
                  // No priority prop (lazy loaded by default)
                />
              </div>
              <div className="float-card card2">
                <Image
                  src="/home-about/image2.jpg" // Path relative to the public folder
                  alt="floating icon 2"
                  className="float-icon image2"
                  width={100} // Set width
                  height={100} // Set height
                  // No priority prop (lazy loaded by default)
                />
              </div>
              <div className="float-card card3">
                <Image
                  src="/home-about/image3.jpg" // Path relative to the public folder
                  alt="floating icon 3"
                  className="float-icon"
                  width={100} // Set width
                  height={100} // Set height
                  // No priority prop (lazy loaded by default)
                />
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="about-content">
            <h1 className="about-title" data-aos="fade-left">
              ABOUT US
              <div className="star">
                {/* Star Images (Non-Critical - Lazy Loaded) */}
                <Image
                  src="/home-about/star.png" // Path relative to the public folder
                  alt="star"
                  className="custom-star star1"
                  width={24} // Set width
                  height={24} // Set height
                  // No priority prop (lazy loaded by default)
                />
                <Image
                  src="/home-about/star.png" // Path relative to the public folder
                  alt="star"
                  className="custom-star star2"
                  width={24} // Set width
                  height={24} // Set height
                  // No priority prop (lazy loaded by default)
                />
                <Image
                  src="/home-about/star.png" // Path relative to the public folder
                  alt="star"
                  className="custom-star star3"
                  width={24} // Set width
                  height={24} // Set height
                  // No priority prop (lazy loaded by default)
                />
              </div>
            </h1>
            <br />
            <br />
            <h4 className="about-subtitle" data-aos="fade-left">
              EMPOWERING BUSINESSES WITH AI-DRIVEN <br />SOLUTIONS
            </h4>
            <p className="about-text" data-aos="fade-left">
              Zuditt AI Innovation LLP, we specialize in transforming businesses
              through cutting-edge artificial intelligence and innovative
              technology solutions. Whether you are a startup looking for a
              competitive edge or an established company.
            </p>
            <Link href="/about">
              <button className="view-more-btn" data-aos="fade-up">View more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;