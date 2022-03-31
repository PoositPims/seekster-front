import axios from "axios";
import React, { useEffect, useState } from "react";
import MainNavbar from "../components/layout/MainNavbar";
import OrderedService from "../components/orderService/OrderedService";

function OrdersPage() {
  const [orders, setOrders] = useState([]);

  axios.defaults.headers.common["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjQ0YTRmZDliYzg2Yzk5Y2QxYWQyYTMiLCJpYXQiOjE2NDg3MDM5MDksImV4cCI6MTY0ODczOTkwOX0.FSX1sqd9ypZBKRzeWyPVeVG5jo-J-A7CB1JBdmjAP-8";
  const apiPath = "https://api-candidate-test.workforce-develop.com";

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${apiPath}/v1/orders`);
        console.log("res ==>", res.data[0]);
        // console.log("res.data ==>", res.data);
        setOrders(res.data);
        // console.log("orders", orders);

        const eachOrder = res?.data?.map(
          (item) => item.service
          // console.log("item", item.service)
        );
        // console.log("eachOrder", eachOrder);
      } catch (err) {
        console.dir(err);
      }
    };
    fetchServices();
  }, []);

  const eachOrder = orders?.map(
    (item) => item.service
    // console.log("item", item.service)
  );
  // console.log("eachOrder", eachOrder);

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
