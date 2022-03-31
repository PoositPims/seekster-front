import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepages from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import classes from "./App.css";
import classesApp from "./App.module.css";
import ServiceDetail from "./pages/ServiceDetail";
import OrdersPage from "./pages/OrdersPage";
import { useEffect } from "react";
import { setToken } from "./services/locaStorage";
import axios from "./config/axios";

function App() {
  useEffect(() => {
    const apiPath = "https://api-candidate-test.workforce-develop.com";

    const fetchServices = async () => {
      try {
        const res = await axios.post(`${apiPath}/v1/auth/signin`, {
          username: "ping",
          password: "123",
        });
        console.log("res", res.data.accessToken);
        setToken(res.data.accessToken);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className={classesApp.app}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Homepages />
          </Route>
          <Route path="/service-detail/">
            <ServiceDetail />
          </Route>
          <Route path="/order-list/">
            <OrdersPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
