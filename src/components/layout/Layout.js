import React from "react";
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      {/* <MainNavbar /> */}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
