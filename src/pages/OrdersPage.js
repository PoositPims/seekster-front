import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/layout/MainNavbar";
import OrderedService from "../components/orderService/OrderedService";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  const apiPath = "https://api-candidate-test.workforce-develop.com";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${apiPath}/v1/orders`);
        console.log("res ==>", res.data[0]);
        setOrders(res.data);

        const eachOrder = res?.data?.map((item) => item.service);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchServices();
  }, []);

  const eachOrder = orders?.map((item) => item.service);

  return (
    <div>
      <div>
        <MainNavbar />
      </div>
      <h1 style={{ margin: "0 0 10px 185px" }}>รายการ</h1>
      {eachOrder?.map((order) => (
        <OrderedService
          _id={order._id}
          name={order.name}
          price={order.price}
          picture={order.picture}
          description={order.description}
          order={order}
        />
      ))}
    </div>
  );
}

export default OrdersPage;
