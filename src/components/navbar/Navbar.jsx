
import React from 'react'
import './navbar.css';
 
function Navbar() {
  return (
    <div>
      <div className='navbar'>
        <div className='nav--logo'>Navbar</div>
        <div className='nav--links'>
          <div>About</div>
          <div>Free Workouts</div>
          <div>Shop</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar