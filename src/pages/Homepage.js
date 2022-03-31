import React, { useContext, useEffect, useState } from "react";
import ServiceList from "../components/Allservices/ServiceList";
import MainNavbar from "../components/layout/MainNavbar";
// import ServicesContextProvider from "../store/services-context";
import classes from "./Homepage.module.css";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

function Homepage() {
  // const serviceCtx = useContext(ServicesContextProvider);
  // const apiPath = "https://api-candidate-test.workforce-develop.com";

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     try {
  //       const res = await axios.get(`${apiPath}/v1/services`);
  //       console.log("res", res);
  //     } catch (err) {
  //       console.dir(err);
  //     }
  //   };
  //   fetchCart();
  // }, []);
  return (
    <div>
      <div className={classes.homepage}>
        <MainNavbar />
        <div className={classes.word}>
          <h1 style={{ marginBottom: "27px" }}>คำบรรยายต่างๆนานา</h1>
          <p>
            เรามียริการที่ครบครันครอบคลุม
            พร้อมที่จะช่วยเหลือคุณในทุกๆด้านอย่างที่คุณต้องการ
          </p>
        </div>
      </div>
      <ServiceList />
    </div>
  );
}

export default Homepage;
