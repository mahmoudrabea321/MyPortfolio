import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
/*import About from "./components/About";*/
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <section id="home"><Home /></section>
      {/*<section id="about"><About /></section>*/}
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default App;
