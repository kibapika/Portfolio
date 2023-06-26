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
      <header className="bg-[#14213d] max-[500px]:h-[10px]">
        <Navbar />
      </header>
      <section className="sidebar bg-[#14213d]">
        <Social />
      </section>
      <section className="sidebar bg-[#14213d] max-[500px]:hidden">
        <Built />
      </section>
      <section
        name="intro"
        className="sec flex justify-center items-center w-auto h-screen bg-[#14213d] max-[500px]:h-[100vh]"
      >
        <Intro />
      </section>
      <section
        name="about"
        className="sec flex justify-center items-center w-auto h-full bg-[#14213d] max-[500px]:h-screen"
      >
        <About />
      </section>
      <section
        name="exp"
        className="sec flex justify-center items-center pt-10 w-auto h-[85vh] max-h-fit bg-[#14213d] max-[500px]:h-screen"
      >
        <Exp />
      </section>
      <section
        name="skills"
        className="sec flex justify-center items-center w-auto h-full h-full bg-[#14213d] my-10 max-[500px]:h-screen"
      >
        <Skills />
      </section>
      <section
        name="projects"
        className="sec flex justify-center items-start w-auto h-[220vh] max-h-fit bg-[#14213d] pt-8 max-[500px]:h-[270vh]"
      >
        <Projects />
      </section>
      <section
        name="contact"
        className="sec flex justify-center items-center w-auto h-full h-full bg-[#14213d] max-[500px]:h-screen"
      >
        <Contact />
      </section>
      <section
        name="footer"
        className="sec flex justify-center items-center w-auto bg-[#14213d] max-[500px]:h-[10vh]"
      >
        <Footer />
      </section>
    </div>
  );
};

export default Home;
