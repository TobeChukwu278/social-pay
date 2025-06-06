import React, { useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Objectives from "./components/Objectives";
import Footer from "./components/Footer";
import Faq from "./components/Faq";

function App() {
  
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Objectives />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;

