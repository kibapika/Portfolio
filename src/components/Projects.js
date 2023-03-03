import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import mindful from "../components/project/mindfulPic.png";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-start"
      style={{ width: "70vw" }}
    >
      <h1
        className="text-[#FCA311] tracking-wide pb-2"
        style={{ fontSize: "5vw", fontFamily: "Share Tech Mono" }}
      >
        Projects
      </h1>

    {/* ----------------------------------------------------------- */}

      <section className="flex flex-row content-center items-center">
        <a
          className="shadow-lg shadow-[#040c16]"
          href="https://mindful-site.web.app/"
        >
          <img
            className="contrast-50 hover:contrast-100 hover:duration-500 rounded-lg"
            style={{ width: "300vw" }}
            alt="mindful"
            src={mindful}
          />
        </a>
        <div
        className="flex flex-col items-end ml-8"
        >
          <h1
          className="text-[#E5E5E5] tracking-widest"
          style={{ fontSize: "3vw", fontFamily: "Roboto" }}
          >
            Mindful
          </h1>
          <p
          className="shadow-lg shadow-[#040c16] text-right text-[#C9ADA7] tracking-wide bg-[#4A4E69] rounded-md p-5"
          style={{ fontSize: "1.25vw", fontFamily: "Roboto", wordSpacing:"1px" }}
          >
            Mindful is a mental health website built with React, using Firebase
            as our backend for efficient data storage and retrieval. Our core
            functionality includes a moodtracker, journal, and more to boost and
            refine mindfulness. We incorporated Chart.js, D3.js, and amCharts 5
            to present our findings on mental health in an engaging and
            easy-to-understand format, which we hope will raise awareness for
            mental health.
          </p>
          <span
          className="text-[#C9ADA7] py-3"
          style={{ fontSize: "1.25vw", fontFamily: "Roboto", wordSpacing:"8px" }}
          >
            React Node.js Firebase Tailwind Cloud Firestore
          </span>
          <div
          className="flex flex-row text-[22px] text-[#E5E5E5]"
          >
            <a 
            className="pr-5 hover:text-[#FCA311] hover:duration-200 hover:translate-y-[-0.20em]"
            href="https://github.com/Team-H-Capstone/Mindful">
              <FiGithub />
            </a>
            <a 
            className="hover:text-[#FCA311] hover:duration-300 hover:translate-y-[-0.20em]"
            href="https://mindful-site.web.app/">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}

      <section className="flex flex-row content-center items-center mt-20">
        <a
          className="shadow-lg shadow-[#040c16]"
          href="https://mindful-site.web.app/"
        >
          <img
            className="contrast-50 hover:contrast-100 hover:duration-500 rounded-lg"
            style={{ width: "300vw" }}
            alt="mindful"
            src={mindful}
          />
        </a>
        <div
        className="flex flex-col items-end ml-8"
        >
          <h1
          className="text-[#E5E5E5] tracking-widest"
          style={{ fontSize: "3vw", fontFamily: "Roboto" }}
          >
            Mindful
          </h1>
          <p
          className="shadow-lg shadow-[#040c16] text-right text-[#C9ADA7] tracking-wide bg-[#4A4E69] rounded-md p-5"
          style={{ fontSize: "1.25vw", fontFamily: "Roboto", wordSpacing:"1px" }}
          >
            Mindful is a mental health website built with React, using Firebase
            as our backend for efficient data storage and retrieval. Our core
            functionality includes a moodtracker, journal, and more to boost and
            refine mindfulness. We incorporated Chart.js, D3.js, and amCharts 5
            to present our findings on mental health in an engaging and
            easy-to-understand format, which we hope will raise awareness for
            mental health.
          </p>
          <span
          className="text-[#C9ADA7] py-3"
          style={{ fontSize: "1.25vw", fontFamily: "Roboto", wordSpacing:"8px" }}
          >
            React Node.js Firebase Tailwind Cloud Firestore
          </span>
          <div
          className="flex flex-row text-[22px] text-[#E5E5E5]"
          >
            <a 
            className="pr-5 hover:text-[#FCA311] hover:duration-200 hover:translate-y-[-0.20em]"
            href="https://github.com/Team-H-Capstone/Mindful">
              <FiGithub />
            </a>
            <a 
            className="hover:text-[#FCA311] hover:duration-300 hover:translate-y-[-0.20em]"
            href="https://mindful-site.web.app/">
              <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}

      <section>ex3</section>
    </div>
  );
};

export default Projects;
