import styles from "../Products/Product.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';

function Product() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const products = [
    {
      title: "OUR PRODUCT",
      imageSrc: "/whatsappCrm.png",
      altText: "WhatsApp CRM",
      description:
        "WhatsApp CRM is a powerful tool that helps businesses manage customer interactions on WhatsApp. It allows you to automate responses, track conversations, and segment customers for personalized communication—all from a single, easy-to-use platform.",
      features: [
        "Automated messaging and quick replies",
        "Customer segmentation for targeted messaging",
        "Multi-user support for team collaboration",
        "Detailed analytics to track performance",
      ],
      author: "John Doe, CEO at Zuditt",
      link: "https://zudittcrm.in/",
      previewLink: "https://zudittcrm.in/",
      imagePosition: "left",
    },
    {
      title: "OUR BPO SOFTWARE",
      imageSrc: "/HomeBpo/bpoHome.webp",
      altText: "BPO Software",
      description:
        "Our BPO software is a cutting-edge solution designed to streamline business process outsourcing operations. It offers robust tools for workforce management, task automation, and detailed reporting, enabling organizations to deliver exceptional service to their clients.",
      features: [
        "Comprehensive workforce management",
        "Automated task assignment and tracking",
        "Advanced reporting and analytics",
        "Seamless integration with CRM platforms",
      ],
      author: "Jane Smith, CTO at Zuditt",
      link: "https://zudittbpo.com/",
      previewLink: "https://zudittbpo.com/",
      imagePosition: "right",
    },
  ];

  return (
    <div className={styles.mainDiv}>
      {products.map((product, index) => (
        <div key={index}>
          <div className={styles.title} data-aos="fade-left">{product.title}</div>
          <br /><br />
          <div
            className={`${styles.cards} ${
              product.imagePosition === "right" ? styles.rowReverse : ""
            }`}  
          >
            <div className={styles.imageCard}  data-aos="fade-right" >
              <button
                className={styles.previewButton}
                onClick={() => window.open(product.previewLink, "_blank")}
              >
                Preview
              </button>
              <img
                src={product.imageSrc}
                alt={product.altText}
                className={styles.productImage}
              />
            </div>
            <div className={styles.description}  data-aos="fade-right">
              <div className={styles.text}>{product.description}</div>
              <br />
              <div className={styles.featuresTitle}>Features:</div>
              <ul className={styles.featuresList}>
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.featureItem}>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className={styles.author}>
                Author: {product.author}
              </div>
              <a href={product.link}>
                <button className={styles.knowMoreButton}>Know more</button>
              </a>
            </div>
          </div>
         
        </div>
      ))}
    </div>
  );
}

export default Product;
