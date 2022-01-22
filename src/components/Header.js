import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <NavLink
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">InShorts</span>
          </NavLink>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <NavLink
              to="national"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Indian
            </NavLink>
            <NavLink
              to="sports"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Sports
            </NavLink>
            <NavLink
              to="world"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              World
            </NavLink>
            <NavLink
              to="technology"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Technology
            </NavLink>
            <NavLink
              to="startup"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Start up
            </NavLink>
            <NavLink
              to="entertainment"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Entertainment
            </NavLink>
            <NavLink
              to="science"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Science
            </NavLink>
            <NavLink
              to="automobile"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              Automobile
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "mr-5 hover:text-gray-900 text-blue-600"
                  : "mr-5 hover:text-gray-900"
              }
            >
              About
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
