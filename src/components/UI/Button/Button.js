import React from "react";
import classes from "./Button.module.css";

const Button = ({ disabled, btnType, clicked, children }) => {
  return (
    <button
      disabled={disabled}
      // sposób na dynamiczne zmienianie nazwy klasy przycisku
      className={[classes.Button, classes[btnType]].join(" ")}
      onClick={clicked}
    >
      {children}
    </button>
  );
};

export default Button;
