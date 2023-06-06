import { useTodoContext } from '@context/TodoProvider';
import { FC, memo } from 'react';
import { StyledButton } from '../styled';
import { StyledItem } from './styled';
import { Props } from './types';

export const TodoItem: FC<Props> = memo(({ taskId, task }) => {
    const { setTodo: setTasks } = useTodoContext();
    function removeTask() {
        setTasks?.((tasks) => {
            return tasks.filter((_, taskIndex) => taskIndex !== taskId);
        });
    }

    function toggleTask() {
        const doneStatus = !task.done;
        setTasks?.((tasks) => {
            return tasks.map((taskItem, taskIndex) => {
                if (taskIndex === taskId) {
                    return {
                        text: task.text,
                        done: doneStatus,
                    };
                }
                return taskItem;
            });
        });
    }

    const prefixClass = 'task-item';
    const doneClass = task.done ? ' done' : '';

    return (
        <StyledItem className={prefixClass + doneClass}>
            <div className={prefixClass + '-infos'}>
                <label className={prefixClass + '-checkbox'}>
                    <input type="checkbox" onChange={toggleTask} checked={task.done} />
                    <div className={prefixClass + '-checkbox-el'}></div>
                </label>
                <div className={prefixClass + '-text'}>{task.text}</div>
            </div>
            <div className={prefixClass + '-remove'}>
                <StyledButton onClick={removeTask} title="Remover item">
                    <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
                        <g
                            fill="none"
                            fill-rule="evenodd"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            transform="translate(5 5)">
                            <path d="m10.5 10.5-10-10z" />
                            <path d="m10.5.5-10 10" />
                        </g>
                    </svg>
                </StyledButton>
            </div>
        </StyledItem>
    );
});

TodoItem.displayName = 'TodoItem';
