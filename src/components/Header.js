import React from 'react'
import './Header.css'

import lambologo from '../images/logo.png';

function Header() {
  return (
    <div className='header'>
    <div className="header_logo">
      <img src={lambologo} alt="lambo"></img>
    </div>

      <div className="header_center">
        <p>lamborghini hurecan</p>
        <p>lamborghini urus</p>
        <p>lamborghini avendator</p>
        
       </div>
      <div className="header_right">
      <p>Shop</p>
      <p>custom service</p>

      </div>

    </div>
  )
}

export default Header