import React from "react";
import "./logo.scss";
import logo from "../../../assets/images/undraw_mobile_interface_re_1vv9.svg";

function Logo() {
  return (
    <div className="svg-container">
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
