import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Exp = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const [exp1, setExp1] = useState(false);

  const [exp2, setExp2] = useState(false);

  const [exp3, setExp3] = useState(false);

  const [isChecked1, setIsChecked1] = useState(false);

  const [isChecked2, setIsChecked2] = useState(false);

  const [isChecked3, setIsChecked3] = useState(false);

  const handle1 = () => {
    setIsChecked1(!isChecked1);
    if (isChecked2) {
      setIsChecked2(!isChecked2);
      setExp2(!exp2);
    }
    if (isChecked3) {
      setIsChecked3(!isChecked3);
      setExp3(!exp3);
    }
    if (!exp1) {
      setExp1(!exp1);
    } else {
      setExp1(!exp1);
    }
  };

  const handle2 = () => {
    setIsChecked2(!isChecked2);
    if (isChecked1) {
      setIsChecked1(!isChecked1);
      setExp1(!exp1);
    }
    if (isChecked3) {
      setIsChecked3(!isChecked3);
      setExp3(!exp3);
    }
    if (!exp2) {
      setExp2(!exp2);
    } else {
      setExp2(!exp2);
    }
  };

  const handle3 = () => {
    setIsChecked3(!isChecked3);
    if (isChecked1) {
      setIsChecked1(!isChecked1);
      setExp1(!exp1);
    }
    if (isChecked2) {
      setIsChecked2(!isChecked2);
      setExp2(!exp2);
    }
    if (!exp3) {
      setExp3(!exp3);
    } else {
      setExp3(!exp3);
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-start"
      style={{ width: "70vw" }}
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="500"
      data-aos-offset="0"
    >
      <h1
        className="text-[#FCA311] tracking-wide pb-5"
        style={{ fontSize: "5vw", fontFamily: "Share Tech Mono" }}
      >
        Experience
      </h1>

      <label
        className="flex flex-row justify-between items-center py-3 px-7 rounded-lg font-bold text-[#C9ADA7] bg-[#000000] cursor-pointer hover:text-[#E5E5E5] hover:bg-[#161a1d] hover:duration-200"
        style={{
          width: "70vw",
          fontSize: "1.25vw",
          fontFamily: "Share Tech Mono",
        }}
        for="check3"
      >
        <div
          className="flex flex-row justify-between items-center"
          style={{
            width: "60.5vw"
          }}
        >
          <span>Student | Fullstack Academy</span>
          <span>2022 - 2023</span>
        </div>
        {!exp3 ? (
          <span className="text-2xl">+</span>
        ) : (
          <span className="text-2xl">-</span>
        )}
      </label>

      <input
        id="check3"
        type="checkbox"
        checked={isChecked3}
        onChange={handle3}
      />

      <div className="test3" style={{ width: "70vw" }}>
        <p className="bg-[#4A4E69] mt-3 p-3 rounded-lg text-[#C9ADA7]">
          ▷ Intensive 19-weeks immersive software engineering coding bootcamp
          <br></br>
          <br></br>▷ Hands-on learning with daily projects and pair-programming
          <br></br>
          <br></br>▷ Focused on front-end and back-end web-development
        </p>
      </div>

      {/* ------------------------------------------------------------------------ */}

      <label
        className="flex flex-row justify-between items-center py-3 px-7 mt-3 rounded-lg font-bold text-[#C9ADA7] bg-[#000000] cursor-pointer hover:text-[#E5E5E5] hover:bg-[#161a1d] hover:duration-200"
        style={{
          width: "70vw",
          fontSize: "1.25vw",
          fontFamily: "Share Tech Mono",
        }}
        for="check1"
      >
        <div
          className="flex flex-row justify-between items-center"
          style={{
            width: "60.5vw"
          }}
        >
          <span>
            Registered Dietitian | Family Residences and Essential Enterprises,
            Inc.
          </span>
          <span>2021 - 2022</span>
        </div>
        {!exp1 ? (
          <span className="text-2xl">+</span>
        ) : (
          <span className="text-2xl">-</span>
        )}
      </label>

      <input
        id="check1"
        type="checkbox"
        checked={isChecked1}
        onChange={handle1}
      />

      <div className="test1">
        <p className="bg-[#4A4E69] mt-3 p-3 rounded-lg text-[#C9ADA7]">
          ▷ Traveled to 50+group homes throughout New York to provide outpatient
          care to approximately 12 individuals with special needs per week
          <br></br>
          <br></br>▷ Reviewed charts in order to conduct outpatient visits based
          on patient specific nutrition needs
          <br></br>
          <br></br>▷ Conducted in-service and nutrition demos (e.g diabetic
          dietary guidelines, food safety) to nurses, behavioral specialists,
          and individuals based on their nutritional needs and concerns
          <br></br>
          <br></br>▷ Managed schedule to coordinate care alongside nurses and
          supervisor for individuals
        </p>
      </div>

      {/* ------------------------------------------------------------------------ */}

      <label
        className="flex flex-row justify-between items-center py-3 px-7 mt-3 rounded-lg font-bold text-[#C9ADA7] bg-[#000000] cursor-pointer hover:text-[#E5E5E5] hover:bg-[#161a1d] hover:duration-200"
        style={{
          width: "70vw",
          fontSize: "1.25vw",
          fontFamily: "Share Tech Mono",
        }}
        for="check2"
      >
        <div
          className="flex flex-row justify-between items-center"
          style={{
            width: "60.5vw"
          }}
        >
          <span>
            Registered Dietitian | The Pavilion at Queens for Rehabilitation &
            Nursing
          </span>
          <span>2020 - 2021</span>
        </div>
        {!exp2 ? (
          <span className="text-2xl">+</span>
        ) : (
          <span className="text-2xl">-</span>
        )}
      </label>

      <input
        id="check2"
        type="checkbox"
        checked={isChecked2}
        onChange={handle2}
      />

      <div className="test2">
        <p className="bg-[#4A4E69] mt-3 p-3 rounded-lg text-[#C9ADA7]">
          ▷ Reviewed and monitored the 90+ residents’ nutritional status,
          prescribed therapeutic diets, and developed care plans within the
          long-term nursing and short-term rehabilitation settings
          <br></br>
          <br></br>▷ Oversaw the tracheostomy and ventilator floors specializing
          in tube feedings (40+ resident’s) in addition to general residents’
          floors
          <br></br>
          <br></br>▷ Mentored dietetic interns from multiple programs
          <br></br>
          <br></br>▷ Attended family care plan meeting bi-weekly to discuss
          residents’ progress
          <br></br>
          <br></br>▷ Collaborated with dialysis center about residents’ care
          <br></br>
          <br></br>▷ Maintained GeriMenu systems for menu management and
          nutritional data
        </p>
      </div>
    </div>
  );
};

export default Exp;
