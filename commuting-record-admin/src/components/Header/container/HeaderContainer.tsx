import React from 'react';
import Header from '../Header';

type Props = {
  title: string;
};

const HeaderContainer = ({ title }: Props) => {
  return <Header title={title} />;
};

export default HeaderContainer;
