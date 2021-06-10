import React from 'react';

import Footer from '../../common/Footer/Footer';
import Header from '../../common/Header/Header';

import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>Home section</h1>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;
