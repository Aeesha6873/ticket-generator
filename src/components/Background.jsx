import React from "react";
import bg from "../images/background-desktop.png";
import squigglyTop from "../images/pattern-squiggly-line-top.svg";
import squiggly from "../images/pattern-squiggly-line-bottom-desktop.svg";
import line from "../images/pattern-lines.svg";
import circle from "../images/pattern-circle.svg";

export default function Background({ children }) {
  return (
    <div className="background-layout">
      {/* Main background */}
      <div className="bg-base" style={{ backgroundImage: `url(${bg})` }} />

      {/* Overlays */}
      <img src={line} className="bg-layer line-top" alt="line top" />
      <img src={circle} className="bg-layer circle-top" alt="circle top" />
      <img
        src={circle}
        className="bg-layer circle-middle"
        alt="circle middle"
      />
      <img
        src={squigglyTop}
        className="bg-layer squiggly-top-right"
        alt="squiggly top right"
      />
      <img
        src={squiggly}
        className="bg-layer squiggly-bottom-left"
        alt="squiggly bottom left"
      />

      {/* Page Content */}
      <div className="bg-content">{children}</div>
    </div>
  );
}
