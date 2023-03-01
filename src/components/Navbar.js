import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [hState, sethState] = useState("top");

  useEffect(() => {
    var lastVal = 0;
    window.onscroll = function () {
      let y = window.scrollY;
      if (y > lastVal) {
        sethState("down");
      }
      if (y < lastVal) {
        sethState("up");
      }
      if (y === 0) {
        sethState("top");
      }
      lastVal = y;
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={"header fixed w-full " + hState}>
      <div
        className="flex flex-row justify-between items-center px-12"
        style={{ height: "13vh" }}
      >
        <Link to="intro" smooth={true} duration={800}>
          <img
            className="rounded-full cursor-pointer"
            width="58"
            alt="logo"
            src="/img/el.png"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="500"
            data-aos-offset="0"
          />
        </Link>
        <nav
          className="flex felx-row items-center tracking-wide"
          style={{ fontSize: "17.5px", fontFamily: "Share Tech Mono" }}
        >
          <Link to="about" smooth={true} duration={800}>
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="500"
              data-aos-offset="0"
              className="cursor-point text-[#C9ADA7] hover:text-[#FCA311]"
            >
              About
            </button>
          </Link>
          <Link to="exp" smooth={true} duration={800}>
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="600"
              data-aos-offset="0"
              className="cursor-point ml-5 text-[#C9ADA7] hover:text-[#FCA311]"
            >
              Experience
            </button>
          </Link>
          <Link to="skills" smooth={true} duration={800}>
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="700"
              data-aos-offset="0"
              className="cursor-point ml-5 text-[#C9ADA7] hover:text-[#FCA311]"
            >
              Tech
            </button>
          </Link>
          <Link to="projects" smooth={true} duration={800}>
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="800"
              data-aos-offset="0"
              className="cursor-point ml-5 text-[#C9ADA7] hover:text-[#FCA311]"
            >
              Projects
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={800}>
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-delay="900"
              data-aos-offset="0"
              className="cursor-point ml-5 text-[#C9ADA7] hover:text-[#FCA311]"
            >
              Contact
            </button>
          </Link>
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-delay="1000"
            data-aos-offset="0"
          >
            <button className="text-[#FCA311] group border-2 border-[#FCA311] rounded-sm px-3 py-1.5 ml-5 flex items-center cursor-point hover:bg-[#FCA311] hover:border-[#FCA311] hover:bg-opacity-20 hover:duration-300">
              <a href="/resume.pdf">Resume</a>
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
