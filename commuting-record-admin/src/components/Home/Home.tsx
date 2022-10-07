import GnbContainer from '@components/Gnb/containers/GnbContainer';
import Header from '@components/Header/Header';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Header title='근로자 관리' />
      <GnbContainer tab='WorkerManagement' />
    </div>
  );
};

export default Home;
