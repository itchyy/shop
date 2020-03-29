import React from "react";
import { connect } from "react-redux";

import CartItem from "./CartItem";
import Button from "../../utilities/Button";
import { selectCartItems } from "../../../redux/cart/cartSelectors";

import "./Cart.styles.scss";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Button>CHECKOUT</Button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(Cart);
