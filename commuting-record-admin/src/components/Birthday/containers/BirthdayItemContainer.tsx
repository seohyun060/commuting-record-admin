import React from 'react';
import BirthdayItem from './components/BirthdayItem';
import type { BirthdayData } from '../../../typedef/components/Birthday/birthday.types';

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
