import React, { useEffect } from "react";
import About from "./About";
import Social from "./Social";
import Built from "./Bulit";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Exp from "./Exp";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
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
      <section className="sidebar bg-[#14213d]">
        <Social />
      </section>
      <section className="sidebar bg-[#14213d]">
        <Built />
      </section>
      <section
        name="intro"
        className="sec flex justify-center items-center w-full h-screen bg-[#14213d] max-[500px]:w-[41.5rem] max-[500px]:h-[54rem]"
      >
        <Intro />
      </section>
      <section
        name="about"
        className="sec flex justify-center items-center w-full h-full bg-[#14213d] max-[500px]:w-[41.5rem]"
      >
        <About />
      </section>
      <section
        name="exp"
        className="sec flex justify-center items-center pt-10 w-full h-[85vh] max-h-fit bg-[#14213d] max-[500px]:w-[41.5rem]"
      >
        <Exp />
      </section>
      <section
        name="skills"
        className="sec flex justify-center items-center w-full h-full h-full bg-[#14213d] my-10 max-[500px]:w-[41.5rem]"
      >
        <Skills />
      </section>
      <section
        name="projects"
        className="sec flex justify-center items-start w-full h-[200vh] max-h-fit bg-[#14213d] pt-8 max-[500px]:w-[41.5rem] max-[500px]:h-[155vh]"
      >
        <Projects />
      </section>
      <section
        name="contact"
        className="sec flex justify-center items-center w-full h-full h-full bg-[#14213d] max-[500px]:w-[41.5rem]"
      >
        <Contact />
      </section>
      <section
        name="footer"
        className="sec flex justify-center items-center w-full bg-[#14213d] max-[500px]:w-[41.5rem] max-[500px]:h-[10vh]"
      >
        <Footer />
      </section>
    </div>
  );
};

export default Home;
