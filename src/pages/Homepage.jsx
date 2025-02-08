import React from 'react'
import ProductCard from '../components/ProductCard'
import { useEffect, useState } from "react"
import axios from 'axios';
import Loading from '../components/Loading'

function Homepage() {

  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      console.log(res.data)
      setProducts(res.data)
    }).catch((err) => {
      console.log(err)
    })
  },[])


  return (
    <>
          {
            products.length? <div className="row g-4">
            {products.map((product) => (
                  <div key={product.id} className="col-md-4 col-lg-3">
                    <ProductCard item={product}/>
                  </div>
                )) 
               } 
            </div> : <Loading/>
          }
    </>
  )
}

export default Homepage
