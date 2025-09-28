// this my whole portifolio and i wanna to make the background-color in the skills page as the other and i wanna to ask if the photo of each project is necessary or not and if necessary how can i get the screen img for each project
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
