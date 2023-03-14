import React from "react";
import { Link } from "react-router-dom";

export default function Nav({ fixed }) {
  /* styre om der skal vises mobile nav */
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-6   bg-hero-pattern ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full justify-end relative flex  lg:w-auto lg:static lg:block lg:justify-start">
            {/* burger menu button */}
            <button
              className=" cursor-pointer text-xl    block  lg:hidden outline-none focus:outline-none "
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                viewBox="0 0 62.073 38.573"
              >
                <g
                  id="Group_17"
                  data-name="Group 17"
                  transform="translate(-1542.463 -4627.463)"
                >
                  <g id="Group_16" data-name="Group 16">
                    <line
                      id="Line_5"
                      data-name="Line 5"
                      y1="1"
                      x2="54"
                      transform="translate(1544.5 4629.5)"
                      fill="none"
                      stroke="#070404"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <line
                      id="Line_6"
                      data-name="Line 6"
                      y1="1"
                      x2="54"
                      transform="translate(1548.5 4663)"
                      fill="none"
                      stroke="#070404"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                    <line
                      id="Line_7"
                      data-name="Line 7"
                      y1="1"
                      x2="36"
                      transform="translate(1562.5 4646.5)"
                      fill="none"
                      stroke="#070404"
                      strokeLinecap="round"
                      strokeWidth="4"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:visible lg:flex-row list-none lg:ml-auto">
              <li className="nav-item group  transition-all duration-300 ease-in-out">
                <Link
                  className="mx-6 py-2 flex items-center text-lg uppercase font-handwritten leading-snug  
                  bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out
                  "
                  to="/"
                >
                  Hjem
                </Link>
              </li>

              <li className="nav-item group  transition-all duration-300 ease-in-out">
                <Link
                  className="mx-6 py-2 flex items-center text-lg uppercase font-handwritten leading-snug  
                  bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out
                  "
                  to="/"
                >
                  Find gårdbutik
                </Link>
              </li>
              <li className="nav-item group  transition-all duration-300 ease-in-out">
                <Link
                  className="mx-6 py-2 flex items-center text-lg uppercase font-handwritten leading-snug  
                  bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out
                  "
                  to="/opskrifter"
                >
                  Opskrifter
                </Link>
              </li>

              <li className="nav-item group  transition-all duration-300 ease-in-out">
                <Link
                  className="mx-6 py-2 flex items-center text-lg uppercase font-handwritten leading-snug  
                  bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out
                  "
                  to="/"
                >
                  Artikler
                </Link>
              </li>
              <li className="nav-item group  transition-all duration-300 ease-in-out">
                <Link
                  className="mx-6 py-2 flex items-center text-lg uppercase font-handwritten leading-snug  
                  bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out
                  "
                  to="/events"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
