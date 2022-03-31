import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const ServicesContext = createContext();

export function ServicesContextProvider(props) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const apiPath = "https://api-candidate-test.workforce-develop.com";

    const fetchServices = async () => {
      try {
        const res = await axios.get(`${apiPath}/v1/services`);
        // const serviceFetch = res.data.map((item) => {
        //   return {
        //     description: item.description,
        //     name: item.name,
        //   };
        // });
        // console.log("res", res.data);
        // console.log("serviceFetch", serviceFetch);
        setServices(res);
        // console.log("services", services);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchServices();
  }, []);

  // const tryFilter = services.filter((item) => {
  //   // let isHave = false;
  //   const serviceId = item._id;
  //   console.log("serviceId", serviceId);
  //   //   item.Cart.products.forEach((item) => {
  //   // if (item.shopId === salesInfos.id) {
  //   //   isHave = true;
  //   // }
  //   //   });
  //   // return isHave;
  // });
  // console.log(tryFilter);

  const context = { services, setServices };

  return (
    <ServicesContext.Provider value={context}>
      {props.children}
    </ServicesContext.Provider>
  );
}

export default ServicesContext;
