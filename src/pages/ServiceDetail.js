import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import MainNavbar from "../components/layout/MainNavbar";
import ButtonBooked from "../components/serviceDetail/ButtonBooked";
import DetailName from "../components/serviceDetail/DetailName";
import DetailService from "../components/serviceDetail/DetailService";
import ServicesContextProvider from "../store/services-context";

function ServiceDetail() {
  const apiPath = "https://api-candidate-test.workforce-develop.com";
  const [services, setServices] = useState({});
  const history = useHistory();
  const serviceId = useParams();
  // console.log("serviceId", serviceId);

  console.log("service----------", services);

  const location = useLocation();
  // console.log("location", location);

  useEffect((serviceId) => {
    const apiPath = "https://api-candidate-test.workforce-develop.com";

    const fetchServices = async () => {
      try {
        const res = await axios.get(
          `${apiPath}/v1/services/${location.state._id}`
        );
        // console.log("res ==>", res.data);
        setServices(res.data);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchServices();
  }, []);

  // const serviceData = {
  //   description: addedDescription,
  // };
  // ..................

  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjQ0YTRmZDliYzg2Yzk5Y2QxYWQyYTMiLCJpYXQiOjE2NDg3MDM5MDksImV4cCI6MTY0ODczOTkwOX0.FSX1sqd9ypZBKRzeWyPVeVG5jo-J-A7CB1JBdmjAP-8";

  const onAdd = async (services) => {
    try {
      const res = await axios.post(
        `${apiPath}/v1/services/${services._id}/booking`,
        {
          name: services.name,
          description: services.description,
          picture: services.picture,
          price: services.price,
        }
      );
      history.push("/order-list/");
      console.log("res ===>", res);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div>
      <MainNavbar />
      <div style={{ marginLeft: "91px" }}>
        <DetailName services={services} />
        <DetailService services={services} />
        <ButtonBooked onAdd={onAdd} services={services} />
      </div>
    </div>
  );
}

export default ServiceDetail;
