import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepages from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import classes from "./App.css";
import classesApp from "./App.module.css";
import ServiceDetail from "./pages/ServiceDetail";
import OrdersPage from "./pages/OrdersPage";

function App() {
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
