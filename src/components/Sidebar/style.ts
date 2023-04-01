import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 172px;
  height: 100vh;

  border-right: 1px solid ${({ theme }) => theme.colors['divider-color']};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 162px;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-block: 24px;

  svg {
    color: ${({ theme }) => theme.colors['icon-color']};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['navbar-hover-color']};

    border-right: 2px solid ${({ theme }) => theme.colors['brand-purple']};
    svg {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`;

export const SignOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-block: 84px;

  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors['icon-color']};

    &:hover {
      color: ${({ theme }) => theme.colors['alert-color']};
    }
  }
`;
