import React from "react";

import "./logo.css";

import logo from "../../../images/logo.svg";

function Logo() {
  return (
    <a href='/'>
      <img className=' logo' src={logo} alt='Логотип проекта Movies-Explorer' />
    </a>
  );
}

export default Logo;
