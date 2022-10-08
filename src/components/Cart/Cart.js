import React from 'react';
import './Cart.css'
const Cart = ({ cart, removeItem }) => {
  let messenge;
  if(cart.length === 0){
    messenge = <p>There are no Products Added yet</p>
  }
  else if(cart.length === 1){
    messenge = <p>R o ekta kino amr jonno! </p>
  }
  else{
    messenge = <p>Thanks! for buy something form us!</p>
  }
  return (
    <div className={cart.length === 0 ? `orange` : `blue`}>
      <h3 className={`bold ${cart.length ===2 ? 'purple' : 'yellow'}`}>Order Summary</h3>
      <h5>Order Quantity {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => removeItem(tshirt)}>X</button>
        </p>
      ))}
      {messenge}
      {cart.length === 3 ? <p>You added three Item</p> : <p>Added More Item</p>}
      <p>&& Operator</p>
      {cart.length === 2 && <h2>You added Two Item</h2>}
      <p>|| operator</p>
      {cart.length === 4 || <p>You Not added Four Item</p>}
    </div>
  );
};

export default Cart;