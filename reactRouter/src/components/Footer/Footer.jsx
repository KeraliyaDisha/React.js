// import React from 'react'
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-white border-y">
      <div className=" mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className=" md:flex md:justify-between">
          <div className=" mb-6 md:mb-0">
            <Link to="/" className="">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                className=" ml-14 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className=" flex mr-36 items-center">
            <div className=" mr-32 text-center">
              <h1 className=" text-gray-700 text-xs font-semibold pb-2">
                RESOURCES
              </h1>
              <ul className=" text-center">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 text-xs font-semibold`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 text-xs font-semibold`
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className=" mr-32 text-center">
              <h1 className=" text-gray-700 text-xs font-semibold pb-2">
                FOLLOW US
              </h1>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 text-xs font-semibold`
                    }
                  >
                    Github
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 text-xs font-semibold`
                    }
                  >
                    Discord
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className=" text-center">
              <h1 className=" text-gray-700 text-xs font-semibold pb-2">
                LEGAL
              </h1>
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 text-xs font-semibold`
                    }
                  >
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0 text-xs font-semibold`
                    }
                  >
                    Term & Condition
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
