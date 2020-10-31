import React from "react";
import Header from "./components/pages/Header";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Works from "./components/pages/Works";
import Contac from "./components/pages/Contac";
import Footer from "./components/pages/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <Contac />
      <Footer />
    </div>
  );
};
