'use client'

import "@/app/globals.css";

import { useEffect } from "react";

import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";





const cards = [
 
  {
    title: " ICO/STO Development",
    description:
    <>
    <p>Our ICO/STO development service can help you organize your ICO/STO launch in the most effective way. Here is the full cycle of  services that we provide for your token launch:,</p>
    <ul>
      <li>In depth consulting on how to launch an ICO/STO 
      </li>
      <li>STO/ICO smart contract development 
      </li>
      <li>Design & Support of ICO/STO marketing campaign 
      </li>
      <li>STO/ICO token and website creation 
      </li>
      <li>Dashboard development & Investor cabinet
      </li>

    </ul>
    </>,
   
   
      image: "Block-chain/BlockChain1.webp",

  },
  {
    title: "Blockchain Wallet Development",
    description:
      "We provide clients with 100% customizable crptocurrency wallet development solutions developed by a team of passionate blockchain developers.we has been involved in the creation of wallet for DDk that supports multiple cryptocurrencies like DDK, DNC,ETH, BTC, etc. DDK is a strong community of 220,000 stong people.DDK is  a fork of List on Delegated Proof of Stake Technology. ",
      image: "Block-chain/BlockChain2.webp"
  },
  {
    title: "Private Ethereum Blockchain",
    description:
      " We offer public and private blockchain development services for any size and purpose for businesses. We have development public blockchain for different customer involved projects and have even developed private enterprise networks for internal organization use. Recently we have developed a private ethereum blockchain based on POA consensus algorithm.",
      image: "Block-chain/BlockChain3.webp",

  },
  {
    title: "dApp Development",
    description:
     <p>
      We build innovative dApps, using Ethereum, EOS, Hyperledger frameworks and IPFS. We are experts in converting your idea into a new generation of apps. We implement dApps that guarantee: 
      <ul>
        <li>Trust and transparency in peer to peer transactions  </li>
        <li> High security via security protocols 
        </li>
        <li>Integration of dApp into existing enterprise infrastructure 
        </li>
        <li>High scalability via network expansion
        </li>
      </ul>
     </p>,
    image: "Block-chain/BlockChain4.webp",
  },
  {
    title: "Custom Blockchain",
    description:
     <p>A proof of concept is used to demonstrate the practical potential of a blockchain project. We proudly announce that we have already implemented PoC using custom blockchain for different fields like Energy, Healthcare, Voting, Real estate, etc. Our proof of concept development strategy: 
      <ul>
        <li>     Identifying blockchain technology to develop PoC 
        </li>
        <li>     Designing the architecture of PoC 
        </li>
        <li>     Development and Testing of PoC 
        </li>
        <li>  Deployment of PoC</li>
      </ul>
   </p>,
       image: "Block-chain/BlockChain5.webp",
  },
  {
    title: "Hyperledger Implementation ",
    description:
      "We aim at enabling process improvements for your business by developing enterprise applications using Hyperledger. We have a dedicated team of developers who have expertise in blockchain technologies. We will be able to improve your business transaction cycles with Hyperledger platform.",
    image: "Block-chain/BlockChain6.webp",
  },

  {
    title: "Decentralized Exchange Development",
    description:
      "Zuditt AI Innovation is adept at developing Decentralized Exchange (DeX). Dex will enable on-chain liquidity protocol for automated token swap on Blockchain.",
    image: "Block-chain/BlockChain7.webp",
  },

  {
    title: "Private Blockchain Development",
    description:
      "Private Blockchain is utilized by organization in order to manage the accuracy of the data within the organization. Only the mem-bers within the organization are given the access to the system. This is generally created with Proof Of Authority Blockchain. In PoA-based net works, transactions and blocks are validated by approved by validators. Validators are approved authority nodes who run put transactions in blocks by an automated program.",
    image: "Block-chain/BlockChain8.webp",
  },

  {
    title: "NFT Marketplace Development",
    description:
      "Zuditt AI Innovation is adept at development of NFT Marketplace. Such marketplace is utilized by brands to launch exclusive products, artists to showcase their arts, music and video copyrights organization in order to issue copyrights to the buyers.",
    image: "Block-chain/NFT.jpg"
  },

  
];




function BlockContent() {
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
    <>
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

export default BlockContent;
