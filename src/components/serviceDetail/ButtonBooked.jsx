import React from "react";
import classes from "./ButtonBooked.module.css";

function ButtonBooked({ services, onAdd }) {
  return (
    <div className={classes.button}>
      <button type="submit" onClick={() => onAdd(services)}>
        จองบริการ
      </button>
    </div>
  );
}

export default ButtonBooked;
