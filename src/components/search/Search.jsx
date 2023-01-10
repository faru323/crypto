import React from 'react'
import { BiSearchAlt } from 'react-icons//bi';
import './style.css'

const Search = () => {
  return (
    <div className='searchDiv'>
    <input type="text" id="search" name="search" placeholder='Enter A Search'/>
   <button id='searchBtn' > <BiSearchAlt id='searchLogo' /></button>
    </div>
  )
}

export default Search