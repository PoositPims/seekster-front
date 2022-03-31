// import axios from "axios";
import axios from "../config/axios";
import React, { createContext, useEffect, useState } from "react";
import { setToken } from "../services/locaStorage";

const LoginContext = createContext();

export function LoginContextProvider(props) {
  //   const [services, setServices] = useState([]);

  //   useEffect(() => {
  //     const apiPath = "https://api-candidate-test.workforce-develop.com";

  //     const fetchServices = async () => {
  //       try {
  //         const res = await axios.post(`${apiPath}/v1/auth/signin`, {
  //           username: "ping",
  //           password: "123",
  //         });
  //         console.log("res", res);
  //         setToken(res.data);
  //       } catch (err) {
  //         console.dir(err);
  //       }
  //     };
  //     fetchServices();
  //   }, []);

  const context = {};

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
