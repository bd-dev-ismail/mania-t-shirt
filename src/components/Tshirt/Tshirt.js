import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tshirt, handalAdd }) => {
  const { picture, name, price } = tshirt;
  return (
    <div className="tshirt">
      <img src={picture} alt="" />
      <h2>{name}</h2>
      <h4>Price {price}</h4>
      <button onClick={()=>handalAdd(tshirt)}>Buy This</button>
    </div>
  );
};

export default Tshirt;