import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    return (
      <div className='home-container'>
        <div className='tshirt-container'>
          {tshirts.map((tshirt) => (
            <Tshirt tshirt={tshirt} key={tshirt.id}></Tshirt>
          ))}
        </div>
        <div className="cart-container">
            <Cart></Cart>
        </div>
      </div>
    );
};

export default Home;