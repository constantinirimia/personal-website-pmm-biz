import React from "react";
import contactStyles from "../styles/Contact.module.css";

const ContactForm: React.FC = () => {
  return (
    <div id="contact" className={contactStyles.container}>
      {/* <div className={contactStyles.contactInfo}>
        <h2> Get in touch with me on LinkedIn!</h2>
        <a
          className={contactStyles.contactButton}
          href="https://www.linkedin.com/in/ziweichen-z/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn!
        </a>
      </div> */}

      {/* <div id="contact" className={contactStyles.contactForm}>
        <form className={contactStyles.form}>
          <h2> Send me a message</h2>
          <div className={contactStyles.inputRow}>
            <input
              type="text"
              placeholder="First Name"
              className={contactStyles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              className={contactStyles.input}
            />
          </div>
          <div className={contactStyles.inputRow}>
            <input
              type="email"
              placeholder="Email Address"
              className={contactStyles.input}
            />
          </div>
          <div className={contactStyles.inputRow}>
            <textarea
              placeholder="Message"
              className={contactStyles.input}
              rows={4}
            />
          </div>
          <button type="submit" className={contactStyles.submitButton}>
            Submit →
          </button>
        </form>
      </div> */}
    </div>
  );
};

export default ContactForm;
