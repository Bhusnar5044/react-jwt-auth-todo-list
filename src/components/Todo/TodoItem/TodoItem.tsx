import { Box } from '@components/Lib';
import { useTodoContext } from '@context/TodoProvider';
import { FC, memo, useState } from 'react';
import { Todo } from '../Todo';
import { AddSUbTaskButton, RemoveButton, StyledItem, StyledItemWrapper } from './styled';
import { Props } from './types';

export const TodoItem: FC<Props> = memo(({ taskId, task, nested, id }) => {
    const { setTodo: setTasks } = useTodoContext();
    const [showNested, setShowNested] = useState(false);
    const removeTask = () => {
        setTasks?.((tasks) => {
            if (nested) {
                return tasks.map((item, index) =>
                    index === id
                        ? { ...item, todo: item?.todo?.filter((_, taskIndex) => taskIndex !== taskId) || [] }
                        : item,
                );
            }
            return tasks.filter((_, taskIndex) => taskIndex !== taskId);
        });
    };

    const toggleTask = () => {
        setTasks?.((tasks) => {
            return tasks.map((taskItem, taskIndex) => {
                if (nested && taskIndex === id) {
                    return {
                        ...taskItem,
                        todo:
                            taskItem?.todo?.map((item, index) =>
                                index === taskId
                                    ? {
                                          ...item,
                                          done: !item.done,
                                      }
                                    : item,
                            ) || [],
                    };
                }
                if (!nested && taskIndex === taskId) {
                    return {
                        ...taskItem,
                        done: !taskItem.done,
                        todo:
                            taskItem?.todo?.map((item) => ({
                                ...item,
                                done: !taskItem.done,
                            })) || [],
                    };
                }
                return taskItem;
            });
        });
    };
    const handleShowNested = () => {
        setShowNested((prev) => !prev);
    };

    const prefixClass = 'task-item';
    const doneClass = task.done ? ' done' : '';

    return (
        <StyledItem className={prefixClass + doneClass}>
            <StyledItemWrapper justifyContent="space-between">
                <div className={prefixClass + '-infos'}>
                    <label className={prefixClass + '-checkbox'}>
                        <input type="checkbox" onChange={toggleTask} checked={task.done} />
                        <div className={prefixClass + '-checkbox-el'}></div>
                    </label>
                    <div className={prefixClass + '-text'}>{task.text}</div>
                </div>
                <Box gap="4rem">
                    {!nested && (
                        <AddSUbTaskButton onClick={handleShowNested}>
                            {showNested ? 'Hide subtasks' : 'Show subtasks'}
                        </AddSUbTaskButton>
                    )}
                    <RemoveButton onClick={removeTask} title="Remover item">
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
                    </RemoveButton>
                </Box>
            </StyledItemWrapper>
            {showNested && <Todo todo={task.todo} id={taskId} />}
        </StyledItem>
    );
});

TodoItem.displayName = 'TodoItem';
