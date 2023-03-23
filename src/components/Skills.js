import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import HTML from "../components/png/html.png";
import CSS from "../components/png/css3.png";
import JS from "../components/png/js.png";
import react from "../components/png/react.png";
import node from "../components/png/node.png";
import firebase from "../components/png/firebase.png";
import tailwind from "../components/png/tailwind.svg";
import github from "../components/png/github.png";
import seq from "../components/png/sequelize.png";
import psql from "../components/png/psql.png";

const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-start w-[70vw] max-[500px]:w-[125vw]"
    >
      <div
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-delay="500"
        data-aos-offset="0"
      >
        <h1
          className="text-[#FCA311] tracking-wide pb-2 text-[4rem]"
          style={{ fontFamily: "Share Tech Mono" }}
        >
          Technologies
        </h1>
        <p
          className="text-[#C9ADA7] tracking-widest text-[1.25rem] "
          style={{ fontFamily: "Roboto" }}
        >
          Here are some technologies that I have used:
        </p>
      </div>
      <div className="png w-full grid grid-rows-2 grid-cols-5 gap-y-10 gap-x-4 py-8 place-items-center">
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="125"
            alt="html"
            src={HTML}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="650"
        >
          <img
            className="bg-[#E5E5E5] rounded-lg shadow-xl shadow-[#040c16]"
            width="125"
            alt="css"
            src={CSS}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="850"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="125"
            height="200"
            alt="js"
            src={JS}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1050"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="130"
            alt="react"
            src={react}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1250"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="140"
            alt="node"
            src={node}
          />
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="150"
            alt="firebase"
            src={firebase}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="650"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="150"
            alt="tailwind"
            src={tailwind}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="850"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="130"
            alt="git"
            src={github}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1050"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="120"
            alt="seq"
            src={seq}
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1250"
        >
          <img
            className="bg-[#E5E5E5] p-2 rounded-lg shadow-xl shadow-[#040c16]"
            width="120"
            alt="psql"
            src={psql}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
