import { TaskCard } from '../../components/TaskCard';

import { tasks } from '../../data/tasks';
import * as S from './style';

export function Home() {
  const notStartedTasks = tasks.filter((task) => task.status === 'not started');
  const nextUp = tasks.filter((task) => task.status === 'next up');
  const processing = tasks.filter((task) => task.status === 'processing');
  const iceBox = tasks.filter((task) => task.status === 'ice box');
  const completed = tasks.filter((task) => task.status === 'completed');

  return (
    <S.Home>
      <S.NotStartedColumn>
        <S.TaskStatusTitle>
          <h2>Not Started</h2>
        </S.TaskStatusTitle>

        {notStartedTasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              protocol={task.protocol}
              client={task.client}
              type={task.type}
              priority={task.priority}
              users={task.users}
            />
          );
        })}
      </S.NotStartedColumn>

      <S.NextUpColumn>
        <S.TaskStatusTitle>
          <h2>Next Up</h2>
        </S.TaskStatusTitle>

        {nextUp.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              protocol={task.protocol}
              client={task.client}
              type={task.type}
              priority={task.priority}
              users={task.users}
            />
          );
        })}
      </S.NextUpColumn>

      <S.ProcessingColumn>
        <S.TaskStatusTitle>
          <h2>Processing</h2>
        </S.TaskStatusTitle>

        {processing.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              protocol={task.protocol}
              client={task.client}
              type={task.type}
              priority={task.priority}
              users={task.users}
            />
          );
        })}
      </S.ProcessingColumn>

      <S.IceBoxColumn>
        <S.TaskStatusTitle>
          <h2>Ice box</h2>
        </S.TaskStatusTitle>

        {iceBox.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              protocol={task.protocol}
              client={task.client}
              type={task.type}
              priority={task.priority}
              users={task.users}
            />
          );
        })}
      </S.IceBoxColumn>

      <S.CompletedColumn>
        <S.TaskStatusTitle>
          <h2>Completed</h2>
        </S.TaskStatusTitle>

        {completed.map((task) => {
          return (
            <TaskCard
              key={task.id}
              id={task.id}
              protocol={task.protocol}
              client={task.client}
              type={task.type}
              priority={task.priority}
              users={task.users}
            />
          );
        })}
      </S.CompletedColumn>
    </S.Home>
  );
}
