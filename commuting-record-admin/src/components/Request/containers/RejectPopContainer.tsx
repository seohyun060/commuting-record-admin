import React, { useCallback, useState } from 'react';
import RejectPop from './components/RejectPop';
import type { VoidFunction, EChange } from '@typedef/common/common.types';

type Props = {
  onRejectToggle: VoidFunction;
  onToggle: VoidFunction;
};

const RejectPopContainer = ({ onRejectToggle, onToggle }: Props) => {
  const [value, setValue] = useState('');
  const onChangeValue = useCallback((e: EChange) => {
    setValue(e.target.value);
  }, []);
  return (
    <RejectPop
      onRejectToggle={onRejectToggle}
      onToggle={onToggle}
      value={value}
      onChangeValue={onChangeValue}
    />
  );
};

export default RejectPopContainer;
