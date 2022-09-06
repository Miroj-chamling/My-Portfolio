import React, { useEffect, useState } from "react";
import AnimatedLetters from "../../components/AnimatedLetters";
import Loaderr from "../../components/Loader/loader";
import ProjectContainer from "../../components/project/project_container";
import "./project.scss";
import { motion } from "framer-motion";
function Projects() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);
  return (
    <>
      <motion.div
        className="container project-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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
          <ProjectContainer
            projectTitle={"Hamro Pasal"}
            projectDescritptionTop="Hamro Pasal is an application built on Flutter that lets user to
                shop online in easy and convenient manner. User can create their
                own account and use it to login the Hamro Pasal App."
            projectDescriptionBottom=" Hamro pasal app uses firebase in the backend to store users
                data, orders and purchases. Users can even pay online with easy
                online payment function integreated to the app."
          />
          <ProjectContainer
            projectTitle="Kurakani"
            projectDescritptionTop="Hamro Pasal is an application built on Flutter that lets user to
                shop online in easy and convenient manner. User can create their
                own account and use it to login the Hamro Pasal App."
            projectDescriptionBottom=" Hamro pasal app uses firebase in the backend to store users
                data, orders and purchases. Users can even pay online with easy
                online payment function integreated to the app."
          />
        </div>
      </motion.div>
      <Loaderr />
    </>
  );
}

export default Projects;
