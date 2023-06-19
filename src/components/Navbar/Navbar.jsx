import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTypo3 } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleResize = () => {
      setClick(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div className="nav-menu-mobile" onClick={handleClick}>
        <FontAwesomeIcon icon={click ? faTimes : faBars} size="sx" />
      </div>
      <div className={!click ? "nav-container" : "nav-container-mobile"}>
        <Link className="link" to="/">
          <div className="nav-logo">
            TRVL
            <FontAwesomeIcon icon={faTypo3} />
          </div>
        </Link>
        <ul className={!click ? "nav-menu" : "nav-menu-mobile"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/sign-up" className="nav-links-mobile">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
