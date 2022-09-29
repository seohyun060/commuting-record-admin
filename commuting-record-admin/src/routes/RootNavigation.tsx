import HomeContainer from '@components/Home/containers/HomeContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RequestContainer from '@components/Request/containers/RequestContainer';

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<HomeContainer />} />
        <Route path='/worker' element={<HomeContainer />} />
        <Route path='/request' element={<RequestContainer />} />
        <Route path='/unsatisfy' element={<HomeContainer />} />
        <Route path='/time' element={<HomeContainer />} />
        <Route path='/birthday' element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
