import React from 'react';
import Work from '../components/Work';
type Props = {
  weekWork: number;
  index: number;
};

const WorkContainer = ({ weekWork, index }: Props) => {
  return (
    <div>
      <Work weekWork={weekWork} index={index} />
    </div>
  );
};

export default WorkContainer;
