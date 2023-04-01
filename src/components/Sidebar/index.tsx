import {
  CheckSquareOffset as CheckSquareOffset,
  ChartLineUp as ChartLineUpIcon,
  GearSix as GearSixIcon,
  HouseSimple as HouseSimpleIcon,
  SignOut as SignOutIcon,
  TrashSimple as TrashSimpleIcon
} from 'phosphor-react';

import * as S from './style';

export function Sidebar() {
  return (
    <S.Container>
      <S.NavList>
        <S.NavItem>
          <HouseSimpleIcon size={32} />
        </S.NavItem>

        <S.NavItem>
          <CheckSquareOffset size={32} />
        </S.NavItem>

        <S.NavItem>
          <ChartLineUpIcon size={32} />
        </S.NavItem>

        <S.NavItem>
          <TrashSimpleIcon size={32} />
        </S.NavItem>

        <S.NavItem>
          <GearSixIcon size={32} />
        </S.NavItem>
      </S.NavList>

      <S.SignOut>
        <SignOutIcon size={32} />
      </S.SignOut>
    </S.Container>
  );
}
