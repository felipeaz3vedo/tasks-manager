import styled from 'styled-components';

export const TaskCard = styled.div`
  width: 100%;
  transition: all 0.2s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);

    > div {
      background-color: ${({ theme }) => theme.colors['task-card-hover-color']};
    }
  }
`;

export const TaskContent = styled.div`
  position: relative;
  padding: 2.375rem 1.25rem 1.625rem 1.25rem;
  margin-bottom: 0.125rem;
  border-radius: 0.25rem 0.25rem 0 0;
  background-color: ${({ theme }) => theme.colors['task-card-color']};
  box-shadow: 0.25rem 0.25rem 0.25rem 0rem #00000040;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }

  > svg {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
  }
`;

export const TaskFooter = styled.div`
  padding: 1rem 1.25rem;
  background-color: ${({ theme }) => theme.colors['task-card-color']};
  box-shadow: 0.25rem 0.25rem 0.25rem 0rem #00000040;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 0.375rem;

  > p {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export const EmptyUserImage = styled.div`
  width: 1.625rem;
  height: 1.625rem;
  border: 0.0625rem dashed white;
  border-radius: 50%;
`;

export const UserImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.625rem;
  height: 1.625rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors['user-image-color']};

  p {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: 700;
  }
`;
