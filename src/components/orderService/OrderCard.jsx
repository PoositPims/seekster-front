import React from "react";
import classes from "./OrderCard.module.css";

function OrderCard({ item, _id, price, name, description, picture }) {
  return (
    <div className={classes.ordercard}>
      <div className={classes.fontAl} style={{ display: "flex" }}>
        <p>{name}</p>
        <div style={{ display: "flex" }}>
          <span style={{ color: "#FF9900", fontSize: "20px" }}>
            <b style={{ marginRight: "20px" }}>ราคา</b>
          </span>
          <b style={{ marginRight: "20px" }}>
            <span style={{ color: "#3F85FD", fontSize: "20px" }}>
              ฿ {price}
            </span>
          </b>
        </div>
      </div>
      <div className={classes.fontDate} style={{ display: "flex" }}>
        <i className="bi bi-calendar3 text-primary me-2 " />
        <p style={{ marginRight: "20px" }}>21 March 2022</p>
        <i className="bi bi-clock text-primary me-2" />
        <p>11:00</p>
      </div>
    </div>
  );
}

export default OrderCard;
