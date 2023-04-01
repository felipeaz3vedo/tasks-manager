import { Outlet } from 'react-router-dom';

import { Sidebar } from '../components/Sidebar';

import * as S from './style';

export function Layout() {
  return (
    <S.Container>
      <Sidebar />
      <Outlet />
    </S.Container>
  );
}
