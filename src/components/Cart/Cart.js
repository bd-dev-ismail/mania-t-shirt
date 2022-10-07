import React from 'react';

const Cart = ({ cart, removeItem }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Order Quantity {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => removeItem(tshirt)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;