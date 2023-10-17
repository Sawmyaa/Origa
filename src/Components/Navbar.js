import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import avatar from '../Assets/avatar.svg'
import phone from '../Assets/phone.svg'
import cart from '../Assets/cart.svg'
import search from '../Assets/search.png'
import arrow from '../Assets/down_arrow.png'


function Navbar() {
  return (
    <div className='nav'>
      <img className='logo' src={logo} alt="Logo" />
      <div className='nav-links'>
        <p>EN <img className='arrow1'src={arrow} alt="" /></p>
        <img src={phone} alt="" />
        <img src={cart} alt="" />
        <img src={avatar} alt="" />
      </div>
      <div className='search'>
        <img src={search} alt="" />
        <input type="text" placeholder='Search' />
      </div>
      <div className='search-tabs'>
        <a>Buy Machines</a>
        <a>Sell Machines</a>
        <a>Service <img className='arrow1'src={arrow} alt="" /> </a> 
        <a>Shop <img className='arrow1'src={arrow} alt="" /></a>
        <a>FAQs</a>
      </div>
    </div>
  )
}

export default Navbar;
