import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggle = ({ clicked }) => {
  return (
    <div className={classes.DrawerToggle} onClick={clicked}>
      <span></span>
    </div>
  );
};

export default DrawerToggle;
