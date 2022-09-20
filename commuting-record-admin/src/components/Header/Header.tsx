import React from 'react';
import './styles/header.style.css';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <div className='header-root'>
      <div className='title'>{title}</div>
    </div>
  );
};

export default Header;
