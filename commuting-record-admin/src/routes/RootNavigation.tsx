import HomeContainer from '@components/Home/containers/HomeContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import TimeContainer from '@components/Time/containers/TimeContainer';
import BirthdayContainer from '@components/Birthday/containers/BirthdayContainer';
import UnsatisfiedContainer from '@components/Unsatisfied/containers/UnsatisfiedContainer';
import RequestContainer from '@components/Request/containers/RequestContainer';

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/worker' element={<HomeContainer />} />
        <Route path='/request' element={<RequestContainer />} />
        <Route path='/unsatisfy' element={<UnsatisfiedContainer />} />
        <Route path='/time' element={<TimeContainer />} />
        <Route path='/birthday' element={<BirthdayContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootNavigation;
