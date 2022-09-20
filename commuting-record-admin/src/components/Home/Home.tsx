import GnbContainer from '@components/Gnb/containers/GnbContainer';
import React from 'react';

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <GnbContainer tab='BirthDay' />
    </div>
  );
};

export default Home;
