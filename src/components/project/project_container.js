import { useState } from "react";
import "./project_container.scss";
import { motion } from "framer-motion";

function ProjectContainer({
  projectDescritptionTop,
  projectTitle,
  projectDescriptionBottom,
  projectImg,
}) {
  const [background, setBackground] = useState("#080808");
  const [fontColor, setFontColor] = useState("#fff");

  const changeStyle = (background, fontColor) => {
    setBackground(background);
    setFontColor(fontColor);
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: [null, 1.1, 1.1] }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="project-container"
          onMouseEnter={() => changeStyle("#ffd700", "#080808")}
          onMouseLeave={() => changeStyle("#080808", "#fff")}
          style={{
            color: fontColor,
            background: background,
          }}
        >
          <div className="project-img"></div>
          <div className="project-overview">
            <h2>{projectTitle}</h2>
            <p>{projectDescritptionTop}</p>
            <p>{projectDescriptionBottom}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectContainer;
