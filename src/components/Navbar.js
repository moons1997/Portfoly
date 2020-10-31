import React, { useState, useEffect } from "react";
import { dataNavbar } from "../services/Data";
import "./styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const handleClick = () => setClick(!click);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav
      className={
        scrolled
          ? "navbar navbar-expand-lg bg_nav  scrolled"
          : "navbar navbar-expand-lg bg_nav"
      }
    >
      <a className="navbar-brand" href="#">
        <span>M</span>
      </a>
      <button className="menu-icon" onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </button>

      <div className={click ? "navabr-list active" : "navabr-list "}>
        <ul className="navbar-nav ml-auto ">
          {dataNavbar.map((data, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href={data.url} onClick={closeMobileMenu}>
                {data.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
