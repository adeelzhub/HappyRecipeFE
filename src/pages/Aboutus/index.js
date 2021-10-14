import "./index.css";

import React from "react";
// import Navbar from "../components/navbar/Index";
// import Tittle from "../../components/title/index";
import lady from "../../images/jason-briscoe-GrdJp16CPk8-unsplash.jpg";
import { useEffect, useRef } from "react";
import { init } from "ityped";

function Aboutus() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["WHY WE LOVE WHAT WE DO"],
    });
  }, []);
  return (
    <div>
      {/* <Tittle /> */}
      {/* <Navbar></Navbar> */}
      <div className="page">
        <div className="PageLeft">
          <p className="intro">
            <h1>
              <span ref={textRef}></span>
            </h1>
            <h3 className="IntroText">
              We created Happea Recipea so users can share their healthy
              recipe's!
            </h3>
          </p>
        </div>
        <div className="PageRight">
          <div className="img">
            <img className="Image" src={lady} alt="Lady" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
