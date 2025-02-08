import axios from 'axios'
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';

function Productdetails() {
   const [product,setProduct] = useState()
   const {id} = useParams()
   useEffect(() => {
     axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
       setProduct(res.data)
     }) .catch((err) => {
       console.log('error');
     })
   })
  
  return (
    <>
          {
            product? <div className="row g-4">
            <div className="col-md-6">
                <img src={product?.image} alt='' className='Pimg' />
           </div>
           <div className="col-md-6">
              <h2>{product?.title}</h2>
             <p className='text-muted'>{product?.category}</p>
             <p>{product?.description}</p>
            <h3 className='text-primary'>${product?.price}</h3>
             <Button className='btn' variant="success">Buy Now</Button>
           </div>
        </div> : <Loading/>
          }
    </> 
  )
}

export default Productdetails
