import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'




function HomeScreen() {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products } = productList;

    useEffect(() => {
        console.log("Products:", products); 
        dispatch(listProducts())       
        
    }, [dispatch])

    console.log("Loading:", loading); // Check the value of loading here
    console.log("Error:", error); // Check the value of error here


return (
    <div> 
    <h1>Latest Products</h1>
    {loading ? <Loader />
        : error ? <Message variant='danger'>{error}</Message>
            :  
            <Row>
                {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                
                    <Product product={product} />

                </Col>
        ))}
    </Row>
    }
    
    </div> 
)
}

export default HomeScreen
