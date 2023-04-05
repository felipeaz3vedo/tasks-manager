import * as S from './style';

interface PriorityTagProps {
  priority?: 'low' | 'medium' | 'hard';
}

export function TaskPriorityTag({ priority }: PriorityTagProps) {
  return (
    <S.TaskPriorityTag priority={priority}>
      <p>{priority}</p>
    </S.TaskPriorityTag>
  );
}
