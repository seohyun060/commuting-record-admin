import HomeContainer from '@components/Home/containers/HomeContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import RequestContainer from '@components/Request/containers/RequestContainer';

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/worker' element={<HomeContainer />} />
        <Route path='/request' element={<HomeContainer />} />
        <Route path='/unsatisfy' element={<HomeContainer />} />
        <Route path='/time' element={<HomeContainer />} />
        <Route path='/birthday' element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
