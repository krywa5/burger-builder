import React, { useEffect, useState } from "react";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];
        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key,
          });
        }
        setOrders(fetchedOrders);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))
      )}
    </div>
  );
};

export default withErrorHandler(Orders, axios);
