import styled from 'styled-components';

interface TaskPriorityTagProps {
  priority?: 'low' | 'medium' | 'hard';
}

export const TaskPriorityTag = styled.div<TaskPriorityTagProps>`
  padding: 0.125rem 0.5rem;
  border-radius: 0.125rem;
  font-size: 0.625rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;

  background: ${({ priority, theme }) => {
    if (priority === 'low') return `${theme.colors['low-color']}`;
    if (priority === 'medium') return `${theme.colors['medium-color']}`;
    if (priority === 'hard') return `${theme.colors['hard-color']}`;
  }};
`;
