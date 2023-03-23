import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import mindful from "../components/project/mindfulPic.png";
import ecom from "../components/project/ecommercePic.png";
import temp from "../components/project/tempsPic.png";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-start w-[70vw] max-[500px]:w-[125vw]"
    >
      <h1
        className="text-[#FCA311] tracking-wide pb-2 text-[4rem]"
        style={{ fontFamily: "Share Tech Mono" }}
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        Projects
      </h1>

      {/* ----------------------------------------------------------- */}

      <section 
      className="flex flex-row content-center items-center"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="800"
      data-aos-offset="0"
      >
        <a
          className="shadow-lg shadow-[#040c16]"
          href="https://mindful-site.web.app/"
        >
          <img
            className="contrast-50 hover:contrast-100 hover:duration-500 rounded-lg w-[300vw] max-[500px]:w-[700vw]"
            alt="mindful"
            src={mindful}
          />
        </a>
        <div className="flex flex-col items-end ml-8">
          <h1
            className="text-[#E5E5E5] tracking-widest pb-1 text-[2.5rem]"
            style={{ fontFamily: "Roboto" }}
          >
            Mindful
          </h1>
          <p
            className="shadow-lg shadow-[#040c16] text-right text-[#C9ADA7] tracking-wide bg-[#4A4E69] rounded-md p-5 text-[0.9rem]"
            style={{
              fontFamily: "Roboto",
              wordSpacing: "1px",
            }}
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
            className="text-[#C9ADA7] py-3 text-[0.9rem]"
            style={{
              fontFamily: "Roboto",
              wordSpacing: "8px",
            }}
          >
            React Node.js Firebase Tailwind Firestore
          </span>
          <div className="flex flex-row text-[22px] text-[#E5E5E5]">
            <a
              className="pr-5 hover:text-[#FCA311] hover:duration-200 hover:translate-y-[-0.20em]"
              href="https://github.com/Team-H-Capstone/Mindful"
            >
              <FiGithub />
            </a>
            <a
              className="hover:text-[#FCA311] hover:duration-300 hover:translate-y-[-0.20em]"
              href="https://mindful-site.web.app/"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}

      <section 
      className="flex flex-row content-center items-center mt-[80px] max-[500px]:mt-[30px]"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="1100"
      data-aos-offset="0"
      >
        <div className="flex flex-col items-start mr-8">
          <h1
            className="text-[#E5E5E5] tracking-widest pb-1 text-[2.5rem]"
            style={{ fontFamily: "Roboto" }}
          >
            Soles
          </h1>
          <p
            className="shadow-lg shadow-[#040c16] text-left text-[#C9ADA7] tracking-wide bg-[#4A4E69] rounded-md p-5 text-[0.9rem]"
            style={{
              fontFamily: "Roboto",
              wordSpacing: "1px",
            }}
          >
            Recreation of a e-commerce sites based on shoes. A CRUD website focusing on React and Javascript.
          </p>
          <span
            className="text-[#C9ADA7] py-3 text-[0.9rem]"
            style={{
              fontFamily: "Roboto",
              wordSpacing: "8px",
            }}
          >
            React Sequelize PSQL AXIOS CSS HTML 
          </span>
          <div className="flex flex-row text-[22px] text-[#E5E5E5]">
            <a
              className="pr-5 hover:text-[#FCA311] hover:duration-200 hover:translate-y-[-0.20em]"
              href="https://github.com/kibapika/Soles---Ecommerce"
            >
              <FiGithub />
            </a>
            <a
              className="hover:text-[#FCA311] hover:duration-300 hover:translate-y-[-0.20em]"
              href="https://github.com/kibapika/Soles---Ecommerce"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
        <a
            className="shadow-lg shadow-[#040c16]"
            href="https://github.com/kibapika/Soles---Ecommerce"
          >
            <img
            className="contrast-50 hover:contrast-100 hover:duration-500 rounded-lg w-[90vw] max-[500px]:w-[200vw]"
              alt="ecom"
              src={ecom}
            />
          </a>
      </section>

      {/* ----------------------------------------------------------- */}

      <section 
      className="flex flex-row content-center items-center mt-[80px] max-[500px]:mt-[50px]"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="1400"
      data-aos-offset="0"
      >
        <a
          className="shadow-lg shadow-[#040c16]"
          href="https://github.com/kibapika/Temps"
        >
          <img
            className="contrast-50 hover:contrast-100 hover:duration-500 rounded-lg w-[70vw] max-[500px]:w-[150vw]"
            alt="temp"
            src={temp}
          />
        </a>
        <div className="flex flex-col items-end ml-8">
          <h1
            className="text-[#E5E5E5] tracking-widest pb-1 text-[2.5rem]"
            style={{ fontFamily: "Roboto" }}
          >
            Temps
          </h1>
          <p
            className="shadow-lg shadow-[#040c16] text-right text-[#C9ADA7] tracking-wide bg-[#4A4E69] rounded-md p-5 text-[0.9rem]"
            style={{
              fontFamily: "Roboto",
              wordSpacing: "1px",
            }}
          >
            Recreation of a weather app using React.js and axios. Mobile friendly!
          </p>
          <span
            className="text-[#C9ADA7] py-3 text-[0.9rem]"
            style={{
              fontFamily: "Roboto",
              wordSpacing: "8px",
            }}
          >
            React Node.js Axios Tailwind CSS
          </span>
          <div className="flex flex-row text-[22px] text-[#E5E5E5]">
            <a
              className="pr-5 hover:text-[#FCA311] hover:duration-200 hover:translate-y-[-0.20em]"
              href="https://github.com/kibapika/Temps"
            >
              <FiGithub />
            </a>
            <a
              className="hover:text-[#FCA311] hover:duration-300 hover:translate-y-[-0.20em]"
              href="https://github.com/kibapika/Temps"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- */}
    </div>
  );
};

export default Projects;
