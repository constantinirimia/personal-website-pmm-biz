import React from "react";
import About from "../components/About";
import ContactForm from "../components/Contact";
import Featured from "../components/Featured";
import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import Footer from "../components/Layout/Footer";

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Featured />
      <Services />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default HomePage;
