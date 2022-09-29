import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';
import './styles/time.style.scss';
type Props = {};

const Home = (props: Props) => {
  return (
    <div className='entire'>
      <Header title='예정시간 조정' />
      <div className='time'>
        <GnbContainer tab='TimeReconciliation' />
        <div className='time-container'></div>
      </div>
    </div>
  );
};

export default Home;
