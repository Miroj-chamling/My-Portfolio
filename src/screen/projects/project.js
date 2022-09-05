import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loaderr from "../../components/Loader/loader";
import "./project.scss";

function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["M", "Y", " ", "P", "R", "O", "J", "E", "C", "T", "S"]}
              idx={7}
            />
          </h1>
        </div>
        <div className="container project-zone">
          <div className="project-container">
            <div className="project-img"></div>
            <div className="project-overview">
              <h2>Hamro Pasal</h2>
              <br />
              <p>
                Hamro Pasal is an application built on Flutter that lets user to
                shop online in easy and convenient manner. User can create their
                own account and use it to login the Hamro Pasal App.
              </p>
              <br />
              <p>
                Hamro pasal app uses firebase in the backend to store users
                data, orders and purchases. Users can even pay online with easy
                online payment function integreated to the app.
              </p>
              <br />
            </div>
          </div>
          <div className="project-container">
            <div className="project-img"></div>
            <div className="project-overview">
              <h2>Hamro Pasal</h2>
              <br />
              <p>
                Hamro Pasal is an application built on Flutter that lets user to
                shop online in easy and convenient manner. User can create their
                own account and use it to login the Hamro Pasal App.
              </p>
              <br />
              <p>
                Hamro pasal app uses firebase in the backend to store users
                data, orders and purchases. Users can even pay online with easy
                online payment function integreated to the app.
              </p>
              <br />
            </div>
          </div>
          <div className="project-container">
            <div className="project-img"></div>
            <div className="project-overview">
              <h2>Hamro Pasal</h2>
              <br />
              <p>
                Hamro Pasal is an application built on Flutter that lets user to
                shop online in easy and convenient manner. User can create their
                own account and use it to login the Hamro Pasal App.
              </p>
              <br />
              <p>
                Hamro pasal app uses firebase in the backend to store users
                data, orders and purchases. Users can even pay online with easy
                online payment function integreated to the app.
              </p>
              <br />
            </div>
          </div>
          <div className="project-container">
            <div className="project-img"></div>
            <div className="project-overview">
              <h2>Hamro Pasal</h2>
              <br />
              <p>
                Hamro Pasal is an application built on Flutter that lets user to
                shop online in easy and convenient manner. User can create their
                own account and use it to login the Hamro Pasal App.
              </p>
              <br />
              <p>
                Hamro pasal app uses firebase in the backend to store users
                data, orders and purchases. Users can even pay online with easy
                online payment function integreated to the app.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Loaderr />
    </>
  );
}

export default Projects;
