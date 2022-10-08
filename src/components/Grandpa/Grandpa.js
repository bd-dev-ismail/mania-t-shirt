import React, { createContext, useState } from 'react';
import Anty from '../Anty/Anty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';
export const RingContext = createContext('Silver ring');
export const MoneyContext = createContext(555);
const Grandpa = () => {
    const [house , setHouse] = useState(1);
    const [money, setMoney] = useState(555);
   
    return (
      <RingContext.Provider value={[house, setHouse]}>
        <MoneyContext.Provider value = {[money, setMoney]}>
          <div className="grandpa">
            <h2>Grandpa</h2>
            <section className="flex">
              <Father house={house}> </Father>
              <Uncle house={house}></Uncle>
              <Anty house={house}></Anty>
            </section>
          </div>
        </MoneyContext.Provider>
      </RingContext.Provider>
    );
};

export default Grandpa;