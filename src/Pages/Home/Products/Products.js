// import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { Row } from 'react-bootstrap';


import axios from 'axios'
import ReactPaginate from 'react-paginate';
// import Product from '../Product/Product'
import './Products.css'
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {

    const [offset, setOffset] = useState(0);
    const [data, setData] = useState([]);
    const [perPage] = useState(3);
    const [pageCount, setPageCount] = useState(0)
    const [displayProducts, setDisplayProducts] = useState([]);
    // const perPage = 3;
    // const [services, setServices] = useState([]);
    // fake data is loading from json 
    // useEffect(() => {
    //     fetch('/products.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])

    const getData = async () => {
        const res = await axios.get('http://localhost:5000/products')
        const data = res.data;
        const slice = data.slice(offset, offset + perPage)
        const postData = slice.map(pd => <div key={pd.id}>
            <Row sm={1} md={2} lg={3} className="g-2 ">

                <div className='row mx-auto my-3 caked'>
                    <Col col-md-6 mt-2>
                        <Card.Img style={{ height: '190px' }} variant="top" src={pd.img} />
                    </Col>

                    <Col col-md-6>
                        <Card.Body style={{ color: 'white' }}>
                            <Card.Title >{pd.name}
                            </Card.Title>
                            <Card.Text style={{ textAlign: 'left' }}>
                                {pd.description}
                            </Card.Text>
                            <p>{pd.price}</p>
                            {/* <p>Price:{price} ৳</p> */}
                            <Link to={`/cake/${pd.id}`}> <button className="btn btn-success ">Buy Now</button></Link>
                        </Card.Body>
                    </Col>

                </div>

            </Row>

        </div>)
        setData(postData)
        setPageCount(Math.ceil(data.length / perPage))
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 3)
    };

    useEffect(() => {
        getData()
    })

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchProduts = data.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchProduts);

    }
    // object is passing to service component
    return (
        <div className='products'>
            <div className="search-container">
                <input type="text"
                    onChange={handleSearch}
                    placeholder="Search Cake 🎂" />
            </div>
            {data}
            {displayProducts}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    );

}
export default Services;








/*  </div>
              <Row sm={1} md={2} lg={3} className="gy-2 mb-5 mx-auto serv" >

                  {
                      services.map((service, index) => {

                          if (index >= 9) return null;
                          return (

                              <Product key={service.key} service={service}></Product>

                          )

                      })

                  }
              </Row>
          </Container>  */


