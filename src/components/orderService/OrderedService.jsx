import React from "react";
import OrderCard from "./OrderCard";

function OrderedService({ item, _id, price, name, description, picture }) {
  return (
    <div>
      <OrderCard
        item={item}
        _id={_id}
        price={price}
        name={name}
        description={description}
        picture={picture}
      />
    </div>
  );
}

export default OrderedService;
