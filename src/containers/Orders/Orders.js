import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as actions from "../../store/actions";

const Orders = ({ onFetchOrders, orders, loading }) => {
  useEffect(() => {
    onFetchOrders();
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

const mapStateToProsp = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchOrders: () => dispatch(actions.fetchOrders()),
  };
};

export default connect(
  mapStateToProsp,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
