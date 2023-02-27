import React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div className="w-full h-screen bg-white">
      <section className="flex flex-col justify-center items-center w-full h-full bg-[#f5f5f5] text-[#5e503f]">
        <h1 className="text-6xl">
          Welcome to my Portfolio!
        </h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Link to="/about" className="mt-10">
          <svg class="arrows">
            <path class="a1" d="M0 0 L30 32 L60 0"></path>
            <path class="a2" d="M0 20 L30 52 L60 20"></path>
            <path class="a3" d="M0 40 L30 72 L60 40"></path>
          </svg>
        </Link>
      </section>
      <section className="flex flex-col justify-center items-center w-full h-full bg-[#5e503f]">
        <About />
      </section>
    </div>
  );
};

export default Home;
