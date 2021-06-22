import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/views/Home/Home';
import ProductView from './components/views/ProductView/ProductView';

import MainLayout from './components/views/MainLayout/MainLayout';
import CartScreen from './components/features/Cart/CartScreen';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <MainLayout>
          <Route exact path='/' component={Home} />
          <Route exact path='/product/:id' component={ProductView} />
          <Route path='/cart/:id?' component={CartScreen} />
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
