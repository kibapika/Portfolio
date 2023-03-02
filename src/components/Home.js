import React, { useEffect } from "react";
import About from "./About";
import Social from "./Social";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Exp from "./Exp";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Test from "./test";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-full h-screen">
      <header className="bg-[#14213d]">
        <Navbar />
      </header>
      <section className="bg-[#14213d]">
        <Social />
      </section>
      <section
      name="intro"
      className="flex justify-center items-center w-full h-full bg-[#14213d]"
      >
        <Intro />
      </section>
      <section
        name="about"
        className="flex justify-center items-center w-full h-full bg-[#14213d]"
      >
        <About />
      </section>
      <section
        name="exp"
        className="flex justify-center items-start pt-10 w-full h-full bg-[#14213d]"
      >
        <Exp />
      </section>
      <section
        name="skills"
        className="flex justify-center items-center w-full h-full bg-[#14213d]"
      >
        <Skills />
      </section>
      <section
        name="projects"
        className="flex justify-center items-center w-full h-full bg-[#14213d]"
      >
        <Projects />
      </section>
      <section
        name="contact"
        className="flex justify-center items-center w-full h-full bg-[#14213d]"
      >
        <Contact />
      </section>
      <section
        name="footer"
        className="flex justify-center items-center w-full bg-[#14213d]"
      >
        <Footer />
      </section>
    </div>
  );
};

export default Home;
