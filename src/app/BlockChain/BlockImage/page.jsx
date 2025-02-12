'use client'

import "@/app/globals.css";

import { useEffect } from "react";

import styles from "./page.module.css";
import AOS from "aos";
import "aos/dist/aos.css";





function BlockImage() {



   
  return (
    <>
            <div className={styles.mainContainer}>

      <div className={styles.webPage}>
        <div className={styles.content}>
          <h1 className={styles.pageTitle}>BLOCK CHAIN DEVELOPMENT</h1><br/>
          <p className={styles.paragraph}>
          Creates secure, decentralized digital ledgers for transparent, immutable transactions without intermediaries. Key uses include cryptocurrencies, smart contracts, and supply chain management, using technologies like Solidity, Hyperledger, and Rust.       </p>
        </div>
      </div>

     

     
</div>
     
    </>
  );
}

export default BlockImage;
