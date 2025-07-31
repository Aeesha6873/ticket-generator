import React from "react";
import logo from "../images/logo-full.svg";

export default function Header() {
  return (
    <div className="logo-header">
      <img src={logo} alt="logo" className="logo-image" />
    </div>
  );
}
