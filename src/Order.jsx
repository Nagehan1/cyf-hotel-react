import RestaurantButton from "./RestaurantButton";
import React, { useState } from "react";
function Order(props) {
  const [orders, setOrders] = useState(0);
  const order1 = () => {
    return setOrders(orders + 1);
  };
  return (
    <div>
      <li>
        {props.orderType}: {orders} <RestaurantButton order1={order1} />
      </li>
    </div>
  );
}

export default Order;
