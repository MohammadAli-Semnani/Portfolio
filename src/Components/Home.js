import React from "react";
import {TypeAnimation} from "react-type-animation";
import { resume } from "../assets";

const Home = () => {
  return (
    <div className="flex mt-24 mx-4 md:ml-8 flex-col md:flex-row justify-between">
      <div className=" md:w-2/3 w-full">
        <p className="text-lightBlue bold md:text-6xl text-5xl mb-4 text-blue-400">
          Hello
        </p>
        <TypeAnimation
          className="text-lightBlue bold  md:text-6xl text-4xl"
          sequence={[
            "I am Mohammad Ali",
            2000,
            "I am Front-End Dev",
            2000,
            "I am Software Engineer",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
        <p className="mt-8 text-2xl text-left font-semibold w-full md:w-3/4 text-blue-500 ">
          I am a Front-End developer with almost two years of coding ,and I like
          solve problems that nobody can solve it. I am excited and I want to
          experience teamwork
        </p>
        <button class=" mt-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          <a href={resume}>Resume</a>
        </button>
      </div>

      {/* <p>asdadasdasdasd</p> */}
    </div>
  );
};

export default Home;
