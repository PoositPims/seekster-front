import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavbar.module.css";

function MainNavbar() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <strong>บริการ</strong>
            </Link>
          </li>
          <li>
            <Link to="/order-list/">
              <strong>รายการ</strong>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavbar;
