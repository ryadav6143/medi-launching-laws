import React, { useState, useEffect } from "react";
import logo from "../../assets/logos/medi-logo.png";
import { Outlet, Link } from "react-router-dom";
import "./Header.css";

function Header() {
  let rbndata = "Contact Us: info@medicaps.ac.in | Call: 079690-24444";

  const [scrolling, setScrolling] = useState(false);
  const [linkColor, setLinkColor] = useState("white");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setLinkColor(scrolling ? "black" : "white");
  }, [scrolling]);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsSticky(window.pageYOffset > sticky);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const sticky = 0; // Assuming sticky header starts at the top

  return (
    <>
      <div className={`ribbon fixed-top ${scrolling ? "scrolled" : ""}`}>
        <p> Contact Us: admission@medicaps.ac.in | Call: 07969024451</p>
      </div>
      <div className={`my-header fixed-top ${scrolling ? "scrolled" : ""}`}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ paddingLeft: "6px", paddingRight: "6px" }}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    className={`nav-link active ${scrolling ? "scrolled" : ""}`}
                    aria-current="page"
                  >
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("whyus")}
                    >
                      Why Us?
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={`nav-link  ${scrolling ? "scrolled" : ""}`}>
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("campus")}
                    >
                      Campus
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <a className="navbar-brand" href="/">
              <img src={logo} className="medi-logo" alt="medi-logo" />
            </a>
            <div
              className="collapse navbar-collapse nav-part-2"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav nav-1">
                <li className="nav-item">
                  <Link className={`nav-link  ${scrolling ? "scrolled" : ""}`}>
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("scholar")}
                    >
                      Scholarship
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link  ${scrolling ? "scrolled" : ""}`}>
                    <a
                      className={`nav-link active ${
                        scrolling ? "scrolled" : ""
                      }`}
                      onClick={() => scrollToSection("offeredcourses")}
                    >
                      {" "}
                      Courses Offered
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
