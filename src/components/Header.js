import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import ProgressiveImage from "react-progressive-image";
import { Link, NavLink } from "react-router-dom";
import * as Icon from "react-feather";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then((response) => {
      setInformation(response.data);
    });
  }, []);

  // const [lightMode, setLightMode] = useState(false); // Made it true if you want to load your site light mode primary

  // lightMode
  //   ? document.body.classList.add("light")
  //   : document.body.classList.remove("light");

  // const handleMode = () => {
  //   if (!lightMode) {
  //     setLightMode(true);
  //     document.body.classList.add("light");
  //   } else {
  //     setLightMode(false);
  //     document.body.classList.remove("light");
  //   }
  // };

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>

      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <ProgressiveImage
              src={information.brandImage}
              placeholder="/images/about-image-placeholder.png"
            >
              {(src) => <img src={src} alt="brandimage" />}
            </ProgressiveImage>
          </Link>
        </div>
        <div
          style={{
            height: "150px",
            backgroundColor: "#a3acc4",
            width: "2px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        ></div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/" end>
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/resume">
              <span>Resume</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects">
              <span>Projects</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <div
          style={{
            height: "150px",
            backgroundColor: "#a3acc4",
            width: "2px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "40px",
            marginBottom: "40px",
          }}
        ></div>
        {/* <div className="light-mode">
          <span className="icon">
            <Icon.Sun />
          </span>
          <button
            className={
              lightMode ? "light-mode-switch active" : "light-mode-switch"
            }
            onClick={() => handleMode()}
          ></button>
        </div> */}
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://nuclearthemes.com"
            >
              Nazar Kruk
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
