import React, { useState } from "react";
import styles from "../../styles/Navigation.module.css";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // New function to handle LinkedIn click
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/ziweichen-z/",
      "_blank",
      "noopener noreferrer"
    );
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home", action: () => scrollToSection("home") },
    { label: "About", id: "about", action: () => scrollToSection("about") },
    {
      label: "Featured",
      id: "featured",
      action: () => scrollToSection("featured"),
    },
    { label: "Skills", id: "skills", action: () => scrollToSection("skills") },
    { label: "LinkedIn", id: "linkedin", action: handleLinkedInClick }, // Modified this item
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        <div className={styles.logo} onClick={() => scrollToSection("home")}>
          <img
            src={`${process.env.PUBLIC_URL}/pers_logo3.png`}
            alt="Logo"
            className={styles.logoImage}
          />
          <span>Ziwei Chen</span>
        </div>

        <div
          className={styles.menuIcon}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></span>
          <span
            className={`${styles.bar} ${isMenuOpen ? styles.open : ""}`}
          ></span>
        </div>

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              style={{ "--item-index": index } as React.CSSProperties}
            >
              <span
                className={styles.navLink}
                onClick={item.action} // Use the action property instead
              >
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
