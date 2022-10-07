import React from 'react';
import BirthdayItem from '../components/BirthdayItem';
type BirthdayData = {
  name: string;
  nickname: string;
  birthday: string;
};

type Props = {
  birthdayItem: BirthdayData;
};

const BirthdayItemContainer = ({ birthdayItem }: Props) => {
  return (
    <div>
      <BirthdayItem birthdayItem={birthdayItem} />
    </div>
  );
};

export default BirthdayItemContainer;
