import React from "react";
import ServiceList from "../components/Allservices/ServiceList";
import MainNavbar from "../components/layout/MainNavbar";
import classes from "./Homepage.module.css";

function Homepage() {
  return (
    <div>
      <div className={classes.homepage}>
        <MainNavbar />
        <div className={classes.word}>
          <h1 style={{ marginBottom: "27px" }}>
            <strong>คำบรรยายต่างๆนานา</strong>
          </h1>
          <p>
            เรามีบริการที่ครบครันครอบคลุม
            พร้อมที่จะช่วยเหลือคุณในทุกๆด้านอย่างที่คุณต้องการ
          </p>
        </div>
      </div>
      <ServiceList />
    </div>
  );
}

export default Homepage;
