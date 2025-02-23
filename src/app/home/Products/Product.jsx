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
      link: "https://zudittcrm.in/",
      previewLink: "https://zudittcrm.in/",
      imagePosition: "left",
    },
    {
      title: "OUR BPO SERVICES",
      imageSrc: "/HomeBpo/bpoHome.webp",
      altText: "BPO Software",
      description:
        "At Zuditt AI Innovations LLP, we offer end-to-end BPO solutions to help businesses enhance productivity, reduce operational costs, and focus on core business functions. Our team ensures efficiency, accuracy, and customer satisfaction with a wide range of outsourcing services.",
      features: [
        "Customer Support & Call Center Services: 24/7 inbound & outbound support, live chat, email, and phone assistance, complaint resolution & customer retention.",
        "Lead Generation & Telemarketing: Cold calling & appointment scheduling, sales & product promotions, market research & survey calls.",
        "Data Entry & Processing: Form filling & document verification, data cleansing & management, fast & accurate processing services.",
        "Virtual Assistance & Back-Office Support: Administrative tasks & email management, order & inventory management, HR & payroll outsourcing.",
        "IT Helpdesk & Technical Support: Remote troubleshooting & software assistance, IT infrastructure monitoring, multi-platform technical support.",
        "Finance & Accounting Services: Bookkeeping & invoice processing, payroll management, tax & financial reporting.",
      ],
      link: "https://zudittbpo.com/",
      previewLink: "https://zudittbpo.com/",
      imagePosition: "right",
    },
  ];

  return (
    <div className={styles.mainDiv}>
      {products.map((product, index) => (
        <div key={index}>
          <div className={styles.title} data-aos="fade-up">{product.title}</div>
          <br /><br />
          <div
            className={`${styles.cards} ${
              product.imagePosition === "right" ? styles.rowReverse : ""
            }`}
          >
            <div className={styles.imageCard} data-aos="fade-right">
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
            <div className={styles.description} data-aos="fade-left">
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