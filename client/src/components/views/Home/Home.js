import React from 'react';

import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';

import { Col, Container, Row } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
  return (
    <div>
      <Header />
      <Container className='py-3'>
        <h1>Latest Products</h1>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Products />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
