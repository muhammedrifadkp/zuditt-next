"use client";
import { useEffect } from "react";

import styles from "./page.module.css";
import "../globals.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaArrowDown } from "react-icons/fa";

const cards = [
  // {
  //   title: "Block Chain Development",
  //   description:
  //     "Blockchain development focuses on creating decentralized and secure digital ledgers for recording transactions. It enables transparency, immutability, and trust without intermediaries. Key applications include cryptocurrencies, smart contracts, and supply chain management. Developers use technologies like Solidity, Hyperledger, and Rust to build blockchain solutions.",
  //   image: "AI/AiBlockChain.webp",
  // },

  {
    title: "App Development",
    description:
      "App development involves designing, coding, and deploying software applications for mobile and web platforms. It includes front-end UI/UX design, back-end development, and database integration. Developers use frameworks like React Native, Flutter, and Swift for efficient cross-platform and native apps. The process focuses on performance, security, and user experience.",
    image: "AI/AiAppDev.webp",
  },
  {
    title: " Gaming  development",
    description:
      "Game development is the process of designing, coding, and creating interactive digital experiences. It involves game engines like Unity and Unreal Engine for graphics, physics, and mechanics. Developers work on gameplay, AI, storytelling, and multiplayer features. The industry spans mobile, PC, console, and VR gaming platforms.",
    image: "AI/GAME-DEVELOPMENT.jpg",
  },
  {
    title: "Robotic process automation",
    description:
      "Robotic Process Automation (RPA) automates repetitive tasks using software bots, improving efficiency and accuracy. It integrates with existing systems to handle data entry, processing, and workflows without human intervention. RPA tools like UiPath, Automation Anywhere, and Blue Prism enable businesses to streamline operations. It reduces costs, minimizes errors, and enhances productivity across industries.",
    image: "AI/AiRoboticProcessAutomation.webp",
  },
  {
    title: "AI DEVELOPMENT",
    description:
      "AI development focuses on creating intelligent systems that can learn, analyze data, and make decisions. It involves machine learning, deep learning, and natural language processing to build applications like chatbots, automation, and predictive analytics. Developers use frameworks like TensorFlow, PyTorch, and OpenAI APIs for AI model training and deployment. AI enhances efficiency, personalization, and problem-solving across various industries.",
    image: "AI/AiDevelopment.webp",
  },
  {
    title: "MACHINE LEARN SERVICE",
    description:
      "Machine learning services provide pre-built models and tools for training, deploying, and managing AI applications. These services, offered by platforms like AWS SageMaker, Google AI, and Azure ML, simplify data processing and model development. Businesses use them for predictive analytics, automation, and real-time decision-making. They enable scalable, efficient, and cost-effective AI solutions without deep technical expertise.",
    image: "AI/AiMachineLearnService.webp",
  },
  {
    title: "CLOUD COMPUTING SERVICE",
    description:
      "Cloud computing services provide on-demand access to computing resources like servers, storage, and databases over the internet. Platforms like AWS, Microsoft Azure, and Google Cloud offer scalable solutions for businesses and developers. These services enable cost-effective, flexible, and secure IT infrastructure without the need for physical hardware. ",
    image: "AI/AiCloudComp.webp",
  },

  {
    title: "WEB DEVELOPMENT",
    description:
      "Web development involves designing, coding, and maintaining websites and web applications. It includes front-end development (UI/UX) using HTML, CSS, and JavaScript, and back-end development with databases and server-side technologies. Frameworks like React, Angular, and Node.js enhance performance and scalability. Web development powers everything from simple sites to complex, data-driven platforms.",
    image: "AI/AiWebDevelop.webp",
  },

  {
    title: "DATA SCIENCE SERVICE",
    description:
      "Data science services offer expertise in analyzing and interpreting complex data to drive business decisions. These services include data cleaning, statistical analysis, machine learning, and predictive modeling. Platforms like AWS, Azure, and Google Cloud provide tools for data storage, processing, and visualization.",
    image: "AI/AiDataScience.webp",
  },

  {
    title: "NATURAL LANGUAGE PROCESS",
    description:
      "Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language. It powers applications like chatbots, speech recognition, sentiment analysis, and translation services. NLP leverages machine learning and deep learning techniques using frameworks like NLTK, SpaCy, and Transformer models. It enhances communication between humans and machines, making AI-driven interactions more intuitive and efficient.",
    image: "AI/AiNaturalLang.webp",
  },

  {
    title: "CLOUD MIGRATION SERVICE",
    description:
      "Cloud migration services help businesses move their data, applications, and infrastructure from on-premises systems to cloud platforms. These services ensure minimal downtime and seamless transitions by assessing current environments and selecting the right cloud solutions. Providers like AWS, Microsoft Azure, and Google Cloud offer tools to facilitate the migration process. Cloud migration enhances scalability, flexibility, and cost efficiency for organizations. ",
    image: "AI/AiCloudMig.webp",
  },
  {
    title: "UI/UX DEVELOPMENT",
    description:
      "UI/UX design focuses on creating visually appealing, user-friendly, and efficient digital experiences. UI (User Interface) deals with the look and feel, including layout, colors, and typography. UX (User Experience) ensures smooth navigation, usability, and overall satisfaction of the user journey. Together, they enhance engagement and functionality in websites, apps, and digital products.",
    image: "AI/AiUI-UX.webp",
  },
];

function AI() {
  //logic goes here
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out-sine", // Easing style
      offset: 200, // Trigger offset in pixels
      delay: 100, // Delay before animation starts
    });
  }, []);
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.webPage}>
          <div className={styles.content}>
            <h1 className={styles.pageTitle}>
              ARTIFICIAL <br />
              INTELLIGENCE
            </h1>
            <br />
            <p className={styles.paragraph}>
              "AI is the simulation of human intelligence in machines, enabling
              them to learn, reason,
              and solve problems ."{" "}
            </p>
            <p className={styles.scroll}>SCROLL DOWN</p>
            <div className={styles.arrow}>
              <FaArrowDown size={50} />
            </div>
          </div>
        </div>
      </div> 
      <div className={styles.container}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.nextContent} ${
              index % 2 === 1 ? styles.alternate : ""
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className={styles.card1}>
              <img src={card.image} alt={card.title} />
            </div>
            <div className={styles.card2}>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
              <button
                className={styles.quoteButton}
                onClick={() =>
                  window.open(
                    `https://wa.me/7994730307?text=I'm%20interested%20in%20your%20${encodeURIComponent(
                      card.title
                    )}%20services. Can you provide more details?`,
                    "_blank"
                  )
                }
              >
                Get a quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AI;
