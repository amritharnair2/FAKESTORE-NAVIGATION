import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({item}) {
    return (
       
            <Card className='carditem h-100 d-flex flex-column'>
            <Card.Img variant="top" src={item?.image} className='productimg' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{item?.title}</Card.Title>
                <Card.Text className='text-muted flex-grow-1'>
                    {item?.description.slice(0,90)} ...
                </Card.Text>
                <div className='d-flex justify-content-between align-items-center mt-auto'>
                    <span className="fw-bold">${item.price}</span>
                    <Link to= {`/productdetails/${item.id}`}><Button className='btn btn-sm' variant="primary">View Details</Button></Link>
                </div>
            </Card.Body>
            </Card>
        
    )
}

export default ProductCard