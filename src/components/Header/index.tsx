import {
  CaretDown as CaretDownIcon,
  MagnifyingGlass as MagnifyingGlassIcon,
  PlusCircle as PlusCircleIcon
} from 'phosphor-react';

import * as S from './style';

export function Header() {
  return (
    <S.Header>
      <S.SearchContainer>
        <S.Input>
          <MagnifyingGlassIcon size={18} />
          <input type="text" name="search" placeholder="Search tasks here" />
        </S.Input>

        <S.AddButton>
          New task
          <PlusCircleIcon size={20} />
        </S.AddButton>
      </S.SearchContainer>

      <S.UserContainer>
        <S.UserInfo>
          <p>Felipe de Azevedo Pessoa</p>
          <p>felipeazevedo@gmail.com</p>
        </S.UserInfo>

        <S.UserImage>
          <p>FA</p>
        </S.UserImage>

        <CaretDownIcon size={20} />
      </S.UserContainer>
    </S.Header>
  );
}
