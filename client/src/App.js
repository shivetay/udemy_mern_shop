import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './components/views/Home/Home';

import MainLayout from './components/views/MainLayout/MainLayout';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <MainLayout>
          <Home />
        </MainLayout>
      </Router>
    </div>
  );
};

export default App;
