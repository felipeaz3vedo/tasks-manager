import styled from 'styled-components';

export const Home = styled.main`
  grid-area: C;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-block: 2.5rem;
`;

export const NotStartedColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 18.125rem;
`;

export const TaskStatusTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.375rem;

  h2 {
    margin-right: 0.5rem;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
  }
`;

export const NextUpColumn = styled(NotStartedColumn)``;

export const ProcessingColumn = styled(NotStartedColumn)``;

export const IceBoxColumn = styled(NotStartedColumn)``;

export const CompletedColumn = styled(NotStartedColumn)``;
