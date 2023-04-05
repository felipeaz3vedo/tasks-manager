import styled from 'styled-components';

export const Sidebar = styled.div`
  grid-area: A;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 10.75rem;
  height: 100vh;
  border-right: 0.0625rem solid ${({ theme }) => theme.colors['divider-color']};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10.125rem;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-block: 1.5rem;

  svg {
    color: ${({ theme }) => theme.colors['icon-color']};
  }

  &:hover,
  &:nth-child(2) {
    background: ${({ theme }) => theme.colors['navbar-hover-color']};

    svg {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }

  &:nth-child(2) {
    border-right: 0.125rem solid ${({ theme }) => theme.colors['brand-purple']};
  }
`;

export const SignOut = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block: 5.25rem;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.colors['icon-color']};

    &:hover {
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`;
