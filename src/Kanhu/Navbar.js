import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <link
          href="https://fonts.googleapis.com/css?family=Lato"
          rel="stylesheet"
        />

        <div className="content">
          <div className="content__container">
            <p className="content__container__text hello"> Hello</p>

            <ul className="content__container__list">
              <li className="content__container__list__item world">world !</li>
              <li className="content__container__list__item bob">bob !</li>
              <li className="content__container__list__item user">users "😀"!</li>
              <li className="content__container__list__item everybody">
                everybody !
              </li>
            </ul>
          </div>
        </div>
      </header>

      <nav className="sticky navbar">
        <div className="brand display__logo">
          <a href="#top" className="nav__link">
            <span className="logo">Kanhu pasayat</span>
          </a>
        </div>

        <input type="checkbox" id="nav" className="hidden" />
        <label htmlFor="nav" className="nav__open">
          <i></i>
          <i></i>
          <i></i>
        </label>
        <div className="nav">
          <ul className="nav__items">
            <li className="nav__item">
              <a href="/" className="nav__link a">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="/About" className="nav__link a">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="/Project" className="nav__link a">
                Project
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
