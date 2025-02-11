import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Featured from "./components/Featured";
import Hero from "./components/Home/Hero";
import Services from "./components/Home/Services";
import Footer from "./components/Layout/Footer";
import Navigation from "./components/Layout/Navigation";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="featured">
          <Featured />
        </section>
        <section id="skills">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />{" "}
      {/* Footer is now outside of main and not wrapped in a section */}
    </div>
  );
};

export default App;
