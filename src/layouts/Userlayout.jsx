import React from 'react'
import Homepage from '../pages/Homepage'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Userlayout() {
  return (
    <>
      <div className='main'>
      <Header/>
      <div className="container content">
            <Homepage/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Userlayout
