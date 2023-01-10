import React from 'react'
import Cards from '../components/cards/Cards'

import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Search from '../components/search/Search'


const Home = () => {
  return (
    <div><Navbar/>

    <Search/>
    <Cards/>

    
    <Footer/></div>
  )
}

export default Home