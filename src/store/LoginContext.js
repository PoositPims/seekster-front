// import axios from "axios";
import axios from "../config/axios";
import React, { createContext, useEffect, useState } from "react";

const LoginContext = createContext();

export function LoginContextProvider(props) {
  const context = {};

  return (
    <LoginContext.Provider value={context}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginContext;
