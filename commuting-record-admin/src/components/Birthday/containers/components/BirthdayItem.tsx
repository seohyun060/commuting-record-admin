import React, { useState, useCallback, useEffect } from 'react';
import '../../styles/birthdayitem.style.scss';

type BirthdayData = {
  name: string;
  nickname: string;
  birthday: string;
};
type Props = {
  birthdayItem: BirthdayData;
};

const BirthdayItem = ({ birthdayItem }: Props) => {
  return (
    <div className='birthday-item'>
      <div className='birthday-item-name'>{birthdayItem.name}</div>
      <div className='birthday-item-nickname'>{birthdayItem.nickname}</div>
      <div className='birthday-item-birthday-date'>{birthdayItem.birthday}</div>
    </div>
  );
};
export default BirthdayItem;
