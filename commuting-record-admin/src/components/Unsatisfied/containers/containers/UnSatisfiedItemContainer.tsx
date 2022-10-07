import React from 'react';
import UnsatisfiedItem from '../components/UnsatisfiedItem';

type UnsatisfiedData = {
  name: string;
  nickname: string;
  worktime: string;
  lefttime: string;
};
type Props = {
  unsatisfiedItem: UnsatisfiedData;
};

const UnsatisfiedItemContainer = ({ unsatisfiedItem }: Props) => {
  return (
    <div>
      <UnsatisfiedItem unsatisfiedItem={unsatisfiedItem} />
    </div>
  );
};

export default UnsatisfiedItemContainer;
