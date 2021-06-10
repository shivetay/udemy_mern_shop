import React from 'react';

import Home from './components/views/Home/Home';
import MainLayout from './components/views/MainLayout/MainLayout';

const App = () => {
  return (
    <div className='App'>
      <MainLayout>
        <Home />
      </MainLayout>
    </div>
  );
};

export default App;
