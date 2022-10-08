import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Special</h3>
            <p><small>Gift: {house}</small></p>
            <button onClick={()=>setHouse(house + 1)}>Incrase</button>
        </div>
    );
};

export default Special;