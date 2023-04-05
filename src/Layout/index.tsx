import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

import * as S from './style';

export function Layout() {
  return (
    <S.AppContainer>
      <Sidebar />

      <S.Wraper>
        <Header />
        <Outlet />
      </S.Wraper>
    </S.AppContainer>
  );
}
