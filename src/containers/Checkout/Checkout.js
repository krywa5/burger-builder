import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
// import buildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: null
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = null;
        for (let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = param[1]
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({
            ingredients,
            price
        })
    }

    checkoutCancelledHandler = () => {
        // cofa do poprzedniego URL
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        // przekieruje do konkretnego URL
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    // Żeby przekazać propsy do komponentu, należy zamiast propsu 'component' użyc propsu 'render'
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;