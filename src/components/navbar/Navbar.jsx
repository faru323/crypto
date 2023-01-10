import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import'./style.css'

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/');

  return (
    <div className='navb'>
    <div className='navbLeft'>
    <img id='logo' src='https://media.tenor.com/mdP6M3qlRqcAAAAM/bitcoin-btc.gif' alt='logo' onClick={handleClick}/>
    </div>
    <div className='navbRight'>
        <ul>
        <li>
        {" "}
        <Link className=" aaa Links" to="/">
         Home
        </Link>
      </li>
            <li>  {" "}
            <Link className=" aaa Links" to="/favourite">
            Favourites
            </Link>
            </li>
          
        </ul>
    </div>
    
    </div>
  )
}

export default Navbar