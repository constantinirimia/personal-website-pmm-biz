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

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Featured", id: "featured" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={styles.navigation}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => scrollToSection("home")}>
          <img
            src={`${process.env.PUBLIC_URL}/pers_logo3.png`}
            alt="Logo"
            className={styles.logoImage}
          />
          <span>Ziwei Chen</span>
        </div>

        {/* Mobile Menu Icon */}
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

        {/* Navigation Links */}

        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
          {navItems.map((item, index) => (
            <li
              key={item.id}
              style={{ "--item-index": index } as React.CSSProperties}
            >
              <span
                className={styles.navLink} // Add this class
                onClick={() => scrollToSection(item.id)}
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
