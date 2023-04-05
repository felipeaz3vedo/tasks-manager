import {
  ArrowsOutSimple as ArrowsOutSimpleIcon,
  Bug as BugIcon,
  Mountains as MountainsIcon,
  PersonSimpleRun as PersonSimpleRunIcon,
  RocketLaunch as RocketLaunchIcon
} from 'phosphor-react';

import { getFirstLetters } from '../../helpers/getFirstLetters';
import { TaskPriorityTag } from '../TaskPriorityTag';
import * as S from './style';

interface TaskCardProps {
  id: string;
  protocol: string;
  client: string;
  type: 'bug' | 'epic' | 'task' | 'sprint';
  priority: 'low' | 'medium' | 'hard';
  users: string[] | [];
}

export function TaskCard({
  id,
  protocol,
  client,
  type,
  priority,
  users
}: TaskCardProps) {
  return (
    <S.TaskCard>
      <S.TaskContent>
        <ArrowsOutSimpleIcon size={16} />
        <h2>{`${protocol} - ${client.toUpperCase()}`}</h2>

        <div>
          <TaskPriorityTag priority={priority} />
          {type == 'bug' && <BugIcon size={20} weight="fill" />}
          {type == 'epic' && <MountainsIcon size={20} weight="fill" />}
          {type == 'task' && <RocketLaunchIcon size={20} weight="fill" />}
          {type == 'sprint' && <PersonSimpleRunIcon size={20} weight="fill" />}
        </div>
      </S.TaskContent>

      <S.TaskFooter>
        {users.length == 0 && <S.EmptyUserImage />}

        {users &&
          users.map((user) => {
            return (
              <S.UserContainer key={id}>
                <S.UserImage>
                  <p>{getFirstLetters(user)}</p>
                </S.UserImage>

                <p>{user}</p>
              </S.UserContainer>
            );
          })}
      </S.TaskFooter>
    </S.TaskCard>
  );
}
