import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h3>Friend</h3>
            <p><small>House: {house}</small></p>
            <button onClick={()=>setHouse(house - 1)}>Decrase</button>
        </div>
    );
};

export default Friend;