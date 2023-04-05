import styled from 'styled-components';

export const Header = styled.header`
  grid-area: B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2.5rem 3rem;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors['divider-color']};
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 28rem;
  height: 2.5rem;
  padding-inline: 1rem;
  border-radius: 0.125rem 0rem;
  background-color: ${({ theme }) => theme.colors['input-color']};

  &:focus-within {
    border: 0.0625rem solid ${({ theme }) => theme.colors['brand-purple']};
    border-right: none;
  }

  svg {
    color: ${({ theme }) => theme.colors['placeholder-color']};
  }

  input {
    width: 100%;
    background-color: transparent;
    font-size: ${({ theme }) => theme.fontSizes.m};
    color: white;
  }
`;

export const AddButton = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.625rem 1rem;
  border-radius: 0rem 0.125rem;
  color: white;
  background: ${({ theme }) => theme.colors['brand-purple-gradient']};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: 600;

  svg {
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 1rem;
  gap: 0.375rem;
  font-weight: 600;

  > p:nth-child(2) {
    color: ${({ theme }) => theme.colors['subtitle-color']};
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 500;
  }
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-right: 0.5rem;
  background-color: ${({ theme }) => theme.colors['user-image-color']};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
`;
