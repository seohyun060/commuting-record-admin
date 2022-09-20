import { TabType } from '@typedef/components/Gnb/gnb.types';
import React from 'react';
import './styles/gnb.style.css';

type Props = {
  adminName: string;
  tab: TabType;
  onTabItemClicked: (tab: TabType) => void;
  onLogoutClicked: () => void;
};

const tabList = {
  WorkerManagement: {
    name: '근로자 관리',
    path: '/worker',
  },
  RequestManagement: {
    name: '요청 관리',
    path: '/request',
  },
  Unsatisfied: {
    name: '근로 미충족자 목록',
    path: '/unsatisfy',
  },
  TimeReconciliation: {
    name: '예정시간 조정',
    path: '/time',
  },
  BirthDay: {
    name: '생일 목록',
    path: '/birthday',
  },
};

const Gnb = ({ adminName, tab, onLogoutClicked, onTabItemClicked }: Props) => {
  return (
    <nav className='gnb-root'>
      <div className='admin-info-wrapper'>
        <div className='circle' />
        <div className='name'>{adminName}</div>
      </div>
      <div className='gnb-item-wrapper'>
        {Object.keys(tabList).map((t, _) => (
          <div
            className={`tab-item-container ${t === tab ? 'active' : ''}`}
            onClick={() => onTabItemClicked(t as TabType)}>
            <div className='square' />
            <div className='tab-name'>{tabList[t as TabType].name}</div>
          </div>
        ))}
      </div>
      <button className='logout-button' onClick={onLogoutClicked}>
        로그아웃
      </button>
    </nav>
  );
};

export default Gnb;
