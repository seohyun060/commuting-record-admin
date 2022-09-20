import { TabType } from '@typedef/components/Gnb/gnb.types';
import React, { useCallback } from 'react';
import Gnb from '../Gnb';
import { useNavigate } from 'react-router-dom';

type Props = {
  tab: TabType;
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

const GnbContainer = ({ tab }: Props) => {
  const navigate = useNavigate();

  const onTabItemClicked = useCallback(
    (tab: TabType) => {
      navigate(tabList[tab].path);
    },
    [navigate],
  );

  const onLogoutClicked = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <Gnb
      adminName={'관리자명'}
      tab={tab}
      onTabItemClicked={onTabItemClicked}
      onLogoutClicked={onLogoutClicked}
    />
  );
};

export default GnbContainer;
