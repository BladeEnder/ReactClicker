import React, { Component } from "react";
import Click from "../images/tap.png";
function Header() {
  return (
    <header style={headerStyle}>
      <img style={iconStyle} src={Click} />
      <h1 style={{ paddingRight: "50px" }}>Clicker</h1>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "5px"
};

const iconStyle = {
  width: "60px",
  height: "60px",
  float: "left"
};
export default Header;
