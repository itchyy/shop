import React from "react";

import Button from "../../utilities/Button";
import "./Cart.styles.scss";

const Cart = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>CHECKOUT</Button>
  </div>
);

export default Cart;
