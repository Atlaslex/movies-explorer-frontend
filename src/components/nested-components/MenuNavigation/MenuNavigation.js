import React from "react";
import "./MenuNavigation.css";
import MenuNavBtnsList from "../MenuNavBtnsList/MenuNavBtnsList";

function MenuNavigation() {
  return (
    <div className=' navigation navbar btns-block'>
      <MenuNavBtnsList />
    </div>
  );
}

export default MenuNavigation;
