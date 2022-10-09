import React from 'react';
import BirthdayItem from './components/BirthdayItem';
import type { BirthdayData } from '../../../typedef/components/Birthday/birthday.types';

type Props = {
  birthdayItem: BirthdayData;
};

const BirthdayItemContainer = ({ birthdayItem }: Props) => {
  return <BirthdayItem birthdayItem={birthdayItem} />;
};

export default BirthdayItemContainer;
