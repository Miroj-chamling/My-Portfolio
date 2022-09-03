import "./App.scss";
import "./components/Layout/index";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/index.js";
import Home from "./components/home/home";
import About from "./components/home/About/about";
import Contact from "./components/contact/contact";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      console.log(setMousePosition({ x: e.clientX, y: e.clientY }));
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  return (
    <>
      <motion.div
        className="custom-cursor"
        variants={variants}
        animate="default"
      ></motion.div>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="about" element={<About />}></Route>
          <Route exact path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;