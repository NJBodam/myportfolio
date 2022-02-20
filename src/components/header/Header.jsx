import React from 'react'
import './header.css'

function Header() {
  return (
    <div>
        <div className='header'>
            <div className='header--content'>
                <h4 className='header--duration'>5 DAYS A WEEK</h4>
                <h1 className='header--title'>Sculpt Your Body</h1>
                <h2 className='header--body'>Ideal fot intermediate fitness people. 
                    In this 5 day split you will learn how to make the most of your time in the gym
                    with an efficient total body workout
                    </h2>
                <div className='btns'>
                <button className='cart--btn' >Add to Cart</button>
                <button className='buy--btn'>Buy Now</button>
                </div>
            </div>
            <div className='header--photo'>A picture of a lady working out
            </div>
        </div>
    </div>

  )
}

export default Header