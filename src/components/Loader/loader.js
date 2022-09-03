import "./loader.scss";

import React from "react";

function Loaderr() {
  return (
    <div>
      <div class="loader">
        <div class="loader-inner">
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="sloader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
          <div class="loader-line-wrap">
            <div class="loader-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loaderr;
