import React, { useState } from "react";
import Aux from "../Auxillary/Auxillary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

const Layout = ({ children, isAuthenticated }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <Aux>
      <Toolbar
        drawerToggleClicked={sideDrawerToggleHandler}
        isAuth={isAuthenticated}
      />
      <SideDrawer
        closed={sideDrawerClosedHandler}
        open={showSideDrawer}
        isAuth={isAuthenticated}
      />
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
