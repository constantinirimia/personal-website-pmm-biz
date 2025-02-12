import React from "react";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className={styles.heroContainer}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/back1.jpeg)`,
      }}
    >
      {/* Dark Overlay for Contrast */}
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            Ziwei <span className={styles.gradientText}>Chen</span>
          </h1>
          <p className={styles.text}>
            Data-driven, consumer-focused Senior Developer Marketing Strategist
            with a passion for innovation. I combine insights from research,
            strategy, and content to drive growth in emerging tech sectors like
            mobile ads, AR, and blockchain.
          </p>
          <div className={styles.buttonGroup}>
            <button
              className={styles.primaryButton}
              onClick={() =>
                document
                  .getElementById("featured")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Read Insights
            </button>

            <button
              className={styles.thirdButton}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ziweichen-z/",
                  "_blank"
                )
              }
            >
              LinkedIn
            </button>

            {/* <button
              className={styles.secondaryButton}
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact me
            </button> */}
          </div>
        </div>

        {/* Profile Image */}
        <div className={styles.profileImageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/-real.jpeg`} // Ensure your image is inside public/
            alt="Marketing Strategist"
            className={styles.profileImage}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
