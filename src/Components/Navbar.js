import React, {useRef, useState, useEffect} from "react";
import {logo} from "../assets";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const menuState = useRef(null)

  const menuHandler = () => {
    setToggle(true);
    };
    
    const handleOutsideClick = (e) => {
      if (menuState.current && !menuState.current.contains(e.target)) {
        setToggle(false);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    }, []);


  return (
    <div>
      <div className="flex justify-between ">
        <img src={logo} className="md:h-10 mt-8 h-10 ml-8" />
        <div className="hidden mt-2 md:flex ">
          <ul className=" flex flex-row mr-16 mt-8">
            <li className="mr-7 text-xl hover:scale-110 font-semibold hover:text-sky-600 cursor-pointer transition-all ease-in-out">
              Home
            </li>
            <li className="mr-7 text-xl hover:scale-110 font-semibold hover:text-sky-600 cursor-pointer transition-all ease-in-out">
              About Me
            </li>
            <li className="mr-7 text-xl hover:scale-110 font-semibold hover:text-sky-600 cursor-pointer transition-all ease-in-out">
              Skills
            </li>
            <li className="mr-7 text-xl hover:scale-110 font-semibold hover:text-sky-600 cursor-pointer transition-all ease-in-out">
              Portfolio
            </li>
            <li className="mr-7 text-xl hover:scale-110 font-semibold hover:text-sky-600 cursor-pointer transition-all ease-in-out">
              Companies
            </li>
            <li className="mr-7 text-xl hover:scale-110 font-semibold hover:text-sky-600 cursor-pointer transition-all ease-in-out">
              Contact us
            </li>
          </ul>
        </div>
        <div className="md:hidden lg:hidden relative">
          {toggle ? (
            <ul
              ref={menuState}
              className={`min-h-screen transition-all ease-in-out flex flex-col bg-sky-700 p-2 transition-all transform  ease-in-out ${
                toggle && "animate-[wiggle_.6s_ease-in-out]"
              }`}>
              <li className="p-4 hover:scale-110 font-semibold hover:text-sky-100 cursor-pointer transition-all ease-in-out">
                Home
              </li>
              <li className="p-4 hover:scale-110 font-semibold hover:text-sky-100 cursor-pointer transition-all ease-in-out">
                About Me
              </li>
              <li className="p-4 hover:scale-110 font-semibold hover:text-sky-100 cursor-pointer transition-all ease-in-out">
                Skills
              </li>
              <li className="p-4 hover:scale-110 font-semibold hover:text-sky-100 cursor-pointer transition-all ease-in-out">
                Portfolio
              </li>
              <li className="p-4 hover:scale-110 font-semibold hover:text-sky-100 cursor-pointer transition-all ease-in-out">
                Companies
              </li>
              <li className="p-4 hover:scale-110 font-semibold hover:text-sky-100 cursor-pointer transition-all ease-in-out">
                Contact us
              </li>
            </ul>
          ) : null}

          {!toggle && (
            <svg
              onClick={menuHandler}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 mt-8 mr-8 cursor-pointer hid text-sky-600">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
