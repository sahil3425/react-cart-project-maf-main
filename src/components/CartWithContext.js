import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import arrow from "./images/arrow.png";
import cartImage from "./images/cartImage.png";
import { CartContext } from "./Cart.js";
import { Button } from "antd";

const CartWithContext = () => {
  const { items, clearAll, totalItems, totalAmount } = useContext(CartContext);
  return (
    <>
      {/* <header>
        <div className="continue-shopping">
          <img src={arrow} alt="arrow" className="arrow-icon" />
          <h3>Back to shopping</h3>
        </div>
        <div className="cart-icon">
          <img src={cartImage} alt="cartImage" />
          <p>{totalItems}</p>
        </div>
      </header> */}
      <section className="main-cart-section">
        <h1>Shopping Cart</h1>
        <p className="total-items">
          Total items: <span className="total-items-count">{totalItems}</span>
        </p>
        <div className="cart-items">
          <div className="cart-items-container">
            <Scrollbars className="scroll">
              {items.map((val, idx) => {
                return <Items key={idx} {...val} />;
              })}
            </Scrollbars>
          </div>
        </div>
        <div className="card-total">
          <h3>
            Cart Total : <span>{totalAmount}</span>
          </h3>
          <Button size="large" type="primary">
            Checkout
          </Button>
          <Button
            size="large"
            type="danger"
            className="clear-cart"
            onClick={() => clearAll()}
          >
            Clear All
          </Button>
        </div>
      </section>
    </>
  );
};

export default CartWithContext;
