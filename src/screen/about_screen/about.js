import {
  faAngular,
  faHtml5,
  faCss3,
  faGitAlt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loaderr from "../../components/Loader/loader";
import "./about.scss";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "B", "O", "U", "T", " ", "M", "E"]}
              idx={8}
            />
          </h1>
          <p>
            I am an undergrad student of Computer Science, with keen interesnt
            in technologies. I am an ehthusiastic developer with sound knowledge
            in web and mobile app development and testing.
          </p>
          <br />
          <p>
            I love to work on open source projects and would love to contribute
            to many challenging and diverse projects.
          </p>
          <br />
          <p>
            Personally, I am a confident lad, naturally curious and working on
            improving my self at verious prospects.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loaderr />
    </>
  );
}

export default About;
