import React from "react";
import Banner from "../components/Banner";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import FloatingNav from "../components/FloatingNav";
import Window from "../components/Window";
import Footer from "../components/Footer";

const PortfolioHome = () => {
  return (
    <>
      <FloatingNav />
      <Banner />
      <Window />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
};

export default PortfolioHome;
