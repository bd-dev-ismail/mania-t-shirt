import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handalAdd = (tshirt)=>{
        const exist = cart.find((ts) => ts._id === tshirt._id);
        if(exist){
            return alert('this item alreday added');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }
    const removeItem = (tshirt) => {
        const remaning = cart.filter(ts => ts._id !== tshirt._id);
        setCart(remaning);
    };
    return (
      <div className="home-container">
        <div className="tshirt-container">
          {tshirts.map((tshirt) => (
            <Tshirt
              tshirt={tshirt}
              key={tshirt._id}
              handalAdd={handalAdd}
            ></Tshirt>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart} removeItem={removeItem}></Cart>
        </div>
      </div>
    );
};

export default Home;