import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

const Checkout = ({ history, ings, match, onInitPurchase, purchased }) => {
  const checkoutCancelledHandler = () => {
    // cofa do poprzedniego URL
    history.goBack();
  };

  const checkoutContinuedHandler = () => {
    // przekieruje do konkretnego URL
    history.replace("/checkout/contact-data");
  };

  if (!ings) {
    return <Redirect to="/" />;
  }

  if (purchased) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <CheckoutSummary
        ingredients={ings}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route path={match.path + "/contact-data"} component={ContactData} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
