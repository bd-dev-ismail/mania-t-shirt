import React from 'react';
import Cousin from '../Cousin/Cousin';

const Anty = ({house}) => {
    return (
        <div>
            <h2>Anty</h2>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Cousin></Cousin>
                <Cousin></Cousin>
            </section>
        </div>
    );
};

export default Anty;