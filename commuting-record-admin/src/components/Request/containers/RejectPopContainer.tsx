import React from 'react';
import RejectPop from './components/RejectPop';
import type { VoidFunction } from '@typedef/components/Request/request.types';

type Props = {
  onRejectToggle: VoidFunction;
  onToggle: VoidFunction;
};

const RejectPopContainer = ({ onRejectToggle, onToggle }: Props) => {
  return <RejectPop onRejectToggle={onRejectToggle} onToggle={onToggle} />;
};

export default RejectPopContainer;
