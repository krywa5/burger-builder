import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ show, modalClosed, children }) => {
  return (
    <Aux>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? "1" : "0",
        }}
      >
        {children}
      </div>
    </Aux>
  );
};

export default React.memo(Modal);
