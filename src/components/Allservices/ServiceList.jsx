import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ServicesContextProvider from "../../store/services-context";
import Serviceitem from "./Serviceitem";
import classes from "./ServiceList.module.css";

function ServiceList() {
  const serviceCtx = useContext(ServicesContextProvider);
  console.log("serviceCtx", serviceCtx.services.data);
  return (
    <section className="list">
      <h2 style={{ margin: "46px 724px 46px 90px" }}>งานบริการ</h2>
      <div className={classes.serviceitem}>
        {serviceCtx?.services?.data?.map((services) => (
          <Serviceitem
            _id={services._id}
            name={services.name}
            price={services.price}
            picture={services.picture}
            descriptiob={services.descriptiob}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceList;
