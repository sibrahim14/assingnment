import React from "react";
// import "./Cart.css";

const Cart = ({ cartItems = [], removeFromCart }) => {
  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  // GST 18%
  const gstAmount = totalPrice * 0.18;

  // Final amount
  const grandTotal = totalPrice + gstAmount;

  return (
    <div className="cart-page">
      <h2>🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item._id}>
                <img
                  src={item.image || "https://via.placeholder.com/150"}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="cart-summary">
            <h4>Price : ₹{totalPrice}</h4>
            <h4>GST (18%) : ₹{gstAmount.toFixed(2)}</h4>
            <h3>Total : ₹{grandTotal.toFixed(2)}</h3>

            <button className="checkout-btn">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
