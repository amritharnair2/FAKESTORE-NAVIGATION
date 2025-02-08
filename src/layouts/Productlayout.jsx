import React from 'react'
import Header1 from '../components/Header1'
import Footer from '../components/Footer'
import Productdetails from '../pages/Productdetails'

function Productlayout() {
  return (
    <div>
      <div className="main">
        <Header1/>
        <div className="container content">
            <Productdetails/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Productlayout
