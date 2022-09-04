import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loaderr from "../../components/Loader/loader";
import "./home.scss";
import Logo from "../../components/logo/logo";

function Home() {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["M", "I", "R", "O", "J"];
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _10`}>i,</span>
            <br />
            <span className={`${letterClass} _11`}>I </span>
            <span className={`${letterClass} _12`}>'m</span>
          </h1>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={10}
            />
          </h1>

          <div className="wrapper">
            <h1 className="static-txt">I'm a</h1>
            <ul className="dynamic-txt">
              <li>
                <span>CS Student</span>
              </li>
              <li>
                <span>Designer</span>
              </li>
              <li>
                <span>Developer</span>
              </li>
            </ul>
          </div>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a href="/" className="download-button">
            DOWNLOAD CV
          </a>
        </div>
        <Logo />
      </div>
      <Loaderr />
    </>
  );
}

export default Home;
