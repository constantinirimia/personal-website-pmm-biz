import { motion } from "framer-motion";
import React from "react";
import type { FeaturedItem } from "../types/types.js";

// Import CSS module
import featuredStyles from "../styles/Featured.module.css";

const Featured: React.FC = () => {
  const featuredItems: FeaturedItem[] = [
    {
      type: "video",
      title: "Watch my talk on Developer Marketing Strategies",
      link: "https://www.youtube.com/watch?v=NuOBuyH92qg",
      thumbnail: "/video-thumbnail.jpg",
      platform: "YouTube",
    },
    {
      type: "article",
      title: "Read more about my talk in this blog",
      link: "https://www.developermarketing.io/data-to-strategy-building-and-scaling-your-developer-program/",
      thumbnail: "/article-thumbnail.jpg",
      platform: "Developer Marketing Alliance",
    },
    {
      type: "post",
      title: "Gain developer audience insights from my live panel",
      link: "https://catchyagency.com/insights/self-directed-learners-how-developers-source-evaluate-and-adopt-solutions",
      thumbnail: "/panel-thumbnail.jpg",
      platform: "Catchy Agency",
    },
  ];

  return (
    <section id="featured" className={featuredStyles.featuredSection}>
      <h2>Featured Content</h2>
      <div className={featuredStyles.featuredGrid}>
        {featuredItems.map((item, index) => (
          <motion.a
            href={item.link}
            key={index}
            className={featuredStyles.featuredCard}
            whileHover={{ y: -5, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={featuredStyles.thumbnail}>
              <img src={item.thumbnail} alt={item.title} />
              {item.type === "video" && (
                <div className={featuredStyles.playButton}>▶</div>
              )}
            </div>
            <div className={featuredStyles.cardContent}>
              <h3>{item.title}</h3>
              <p>{item.platform}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Featured;
