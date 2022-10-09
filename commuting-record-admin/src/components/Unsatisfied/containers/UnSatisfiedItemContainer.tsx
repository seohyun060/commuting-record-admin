import React from 'react';
import UnsatisfiedItem from './components/UnsatisfiedItem';
import type { UnsatisfiedData } from '../../../typedef/components/Unsatisfied/unsatisfied.types';

type Props = {
  unsatisfiedItem: UnsatisfiedData;
};

const UnsatisfiedItemContainer = ({ unsatisfiedItem }: Props) => {
  return <UnsatisfiedItem unsatisfiedItem={unsatisfiedItem} />;
};

export default UnsatisfiedItemContainer;
