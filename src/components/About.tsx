import React from "react";
import styles from "../styles/About.module.css";

const About: React.FC = () => {
  return (
    <section id="about" className={styles.featuredSection}>
      <h2>About</h2>
      <div className={styles.featuredGrid}>
        <p className={styles.intro}>
          I am a data-driven, consumer-centric marketer with an M.S. in
          Marketing from Northwestern University. My expertise spans research,
          strategy, content creation, events, and media, contributing to brand
          growth and product positioning across diverse industries, including
          mobile advertising, app store optimization, blockchain, edge
          computing, and augmented reality (AR).
        </p>
        <p className={styles.intro}>
          I thrive in fast-paced, dynamic environments leveraging agile
          iteration and empathetic communication to navigate complex marketing
          landscapes. By blending data analysis with creative storytelling, I
          develop strategic initiatives that drive engagement, conversion, and
          lasting impact.
        </p>
        <p className={styles.intro}>
          I've successfully led marketing initiatives for industry leaders
          including Meta, Intel AI, Cohere AI, Algorand, and Google,
          consistently delivering strategies that enhance brand visibility and
          accelerate product adoption.
        </p>
        <div className={styles.clientLogos}>
          <img
            src={`${process.env.PUBLIC_URL}/logo_meta.png`}
            alt="Meta logo"
            className={styles.logo}
          />
          <img
            src={`${process.env.PUBLIC_URL}/logo_intel.png`}
            alt="Intel AI logo"
            className={styles.logo}
          />
          <img
            src={`${process.env.PUBLIC_URL}/logo_cohere.png`}
            alt="Cohere AI logo"
            className={styles.logo}
          />
          <img
            src={`${process.env.PUBLIC_URL}/logo_algo.png`}
            alt="Algorand logo"
            className={styles.logo}
          />
          <img
            src={`${process.env.PUBLIC_URL}/logo_google.png`}
            alt="Google logo"
            className={styles.logo}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
