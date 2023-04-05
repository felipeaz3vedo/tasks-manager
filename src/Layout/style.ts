import styled from 'styled-components';

export const AppContainer = styled.div`
  display: grid;

  grid-template-areas:
    'A B'
    'A C';
`;

export const Wraper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1560px;
  margin-inline: 90px;
`;
