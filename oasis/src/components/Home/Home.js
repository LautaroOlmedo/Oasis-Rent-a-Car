import React from 'react'
import Cards from '../Cards/Cards'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Reviews from '../Reviews/Reviews'
import './Home.css'

function Home() {

  return (
    <div className='inicio'>
      <NavBar />
      <Cards />
      <Reviews />
      <Footer />
    </div>
  )
}

export default Home