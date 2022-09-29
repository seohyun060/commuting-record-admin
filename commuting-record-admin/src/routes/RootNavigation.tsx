import HomeContainer from '@components/Home/containers/HomeContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BirthdayContainer from '@components/Birthday/containers/BirthdayContainer';
const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<HomeContainer />} />

        <Route path='/worker' element={<HomeContainer />} />
        <Route path='/request' element={<HomeContainer />} />
        <Route path='/unsatisfy' element={<HomeContainer />} />
        <Route path='/time' element={<HomeContainer />} />
        <Route path='/birthday' element={<BirthdayContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
