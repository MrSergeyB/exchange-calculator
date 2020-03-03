import React from 'react';
import calcImg from '../img/money.png';
import './nav.css';

const Nav = () => {
  return (
    <header>
      <div className='nav-div'>
        <img
          src={calcImg}
          className='money-img'
          alt='Exchange calculator'
        ></img>
      </div>
      <h1>Exchange Rate Calculator</h1>
      <p>Choose the currency andthe amountto get exchange rate</p>
    </header>
  );
};

export default Nav;
