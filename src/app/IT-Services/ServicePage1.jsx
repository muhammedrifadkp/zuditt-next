'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceCard from "./ServiceCard/ServiceCard";
import styles from "./ServicePage1.module.css";

const services = [
  {
    title: "Website Development",
    description: "Our website development services help create responsive, visually appealing, and highly functional websites tailored to your business needs. We focus on providing user-centric design, performance optimization, and scalable solutions that help your business grow online. Our team ensures fast loading times, SEO-friendly architecture, and mobile responsiveness. Additionally, we prioritize security features to protect your data and enhance user experience.",
    image: "/IT-Service/Website-development.webp",
  },
  {
    title: "App Development",
    description: "We specialize in creating mobile applications for both Android and iOS platforms. Our app development services are focused on creating seamless, intuitive, and high-performance apps that enhance user engagement and meet business objectives. We provide comprehensive testing to ensure smooth operation across devices and regular updates to keep your app competitive. Each project is crafted to align with your brand identity and market needs.",
    image: "/IT-Service/app-development.webp",
  },
  {
    title: "Software Development",
    description: "Our software development services include custom-built applications designed to improve efficiency and streamline business processes. From backend solutions to user interfaces, we provide end-to-end services to solve complex business challenges. With user-centered design principles, robust architecture, and secure frameworks, we ensure that your software performs at its best. We also offer integration with existing systems and training for ease of use.",
    image: "/IT-Service/software-dev.webp",
  },
  {
    title: "Whatsapp Automation",
    description: "With WhatsApp automation, we offer businesses the ability to engage with customers, manage conversations, and automate processes effectively. Our solution increases productivity by automating repetitive tasks while enhancing customer satisfaction. We integrate with CRM systems and analytics tools to track customer engagement. Our automated workflows are tailored to fit your business needs and improve response times.",
    image: "/IT-Service/whatsap-automation.webp",
  },
  {
    title: "Digital Marketing",
    description: "Our digital marketing services focus on helping businesses improve their online presence through SEO, PPC, social media management, and content creation. We work to drive traffic, increase engagement, and convert leads into customers effectively. We provide detailed performance reports to track progress and adjust strategies. Our campaigns are tailored to maximize ROI and strengthen brand presence across digital platforms.",
    image: "/IT-Service/digital-marketing.webp",
  },
  {
    title: "Business Automation",
    description: "Business automation helps streamline repetitive tasks and processes, saving time and resources. We offer tailored automation solutions that enhance productivity and reduce human error, allowing your business to scale more efficiently. With workflow optimization, reporting, and integration options, we ensure seamless and sustainable growth. Our approach allows for significant time savings and operational efficiency.",
    image: "/IT-Service/business-automation.webp",
  },
  {
    title: "Business Outsourcing Process",
    description: "Business outsourcing processes allow companies to reduce overhead costs while gaining access to specialized skills and resources. We help businesses identify and outsource critical functions to optimize operations and focus on core growth areas. Our team handles recruitment, training, and performance management, ensuring consistent quality. We aim to provide cost-effective solutions without compromising on service standards.",
    image: "/IT-Service/business-out-source.webp",
  }
];

function ServicePage1() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-sine",
      offset: 200,
      delay: 100,
    });
  }, []);

  return (
    <div className={styles.container}>
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          isAlternate={index % 2 === 1}
        />
      ))}
    </div>
  );
}

export default ServicePage1;