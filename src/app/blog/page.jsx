'use client'


import styles from "./page.module.css";
import '../globals.css'; 

import Link from 'next/link';
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "AI in 2025: The Future of Technology and Innovation",
    image: "/Blog/AI2025.webp",
    alt: "AI Trends",
    description:
      "As we step into 2025, we stand at the forefront of a digital revolution powered by AI. AI technology is actively transforming industries, driving innovation, and and reshaping our everyday lives. With breakthroughs in machine learning, automation, data analytics,...",
    buttonText: "Read more",
    link: "/blog/blog1",
  },
  {
    id: 2,
    title: "Digital Marketing Strategies for Business Success",
    image: "/Blog/digitalmark.webp",
    alt: "Digital Marketing",
    description:
      "Businesses aiming for growth and customer engagement will find digital marketing indispensable by 2025. Trends like AI, voice search, and video content are expected to be predominant in how businesses interact with their audience. Therefore, there is a need...",
    buttonText: "Read more",
    link: "/blog/blog2",
  },
  {
    id: 3,
    title: "The Rise of AI in BPO: How Automation is Transforming Outsourcing",
    image: "Blog/bpo1.webp",
    alt: "AI in BPO",
    description:
      "The Business Process Outsourcing (BPO) industry is rapidly evolving, with Artificial Intelligence (AI) and automation technologies at the forefront of this transformation. From optimizing data entry services to revolutionizing customer support outsourcing, AI is enabling ...",
    buttonText: "Read more",
    link: "/blog/blog3",
  },
  {
    id: 4,
    title: "How to Use WhatsApp Marketing to Increase Your Business Revenue for the Year 2025 ?",
    image: "/Blog/whatsap.webp",
    alt: "How to Use WhatsApp Marketing to Increase Your Business Revenue for the Year 2025 ",
    description:
      "In the year 2025, companies strive to establish relationships with clients in a swift and efficient manner. WhatsApp offers effective solutions to almost all advertising requirements and has become a marketing hub for brands seeking to establish engagement  ...",
    buttonText: "Read more",
    link: "/blog/blog4",
  },
  // Add more articles here if needed
];

export default function Blog() {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Filter articles based on the search query
  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className={styles.blogContainer}>
      {/* Header Section */}
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <h1>Latest articles</h1>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="I want to read about..."
              className={styles.searchInput}
              value={searchQuery} // Bind input value to the search query
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query on input change
            />
            <button className={styles.searchButton}>
              <svg
                className={styles.searchIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        <nav className={styles.navigation}>
          <a href="#" className={styles.navLink}>
            Company
          </a>
          <a href="#" className={styles.navLink}>
            Events
          </a>
          <a href="#" className={styles.navLink}>
            Product
          </a>
          <a href="#" className={styles.navLink}>
            Guest Blogs
          </a>
          <a href="#" className={styles.navLink}>
            Q&A Series
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.articlesGrid}>
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <div className={styles.articleImageContainer}>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className={styles.articleImage}
                  />
                  <div className={styles.article}>
                    <h2>{article.title}</h2>
                  </div>
                </div>
                <div className={styles.articleContent}>
                  <p className={styles.description}>{article.description}</p>
                  <button>
                    <a href={article.link} className={styles.blogLink}>
                      Read more
                    </a>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No articles found matching your search.</p>
          )}
        </div>
      </main>
    </div>
  );
}
