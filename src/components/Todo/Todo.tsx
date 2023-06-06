import { Text } from '@components/Lib';
import { useTodoContext } from '@context/TodoProvider';
import { ITodo } from '@context/types';
import { FC, memo, useEffect, useRef, useState } from 'react';
import List from './List';
import { StyledButton, StyledContainer, StyledInput, TodoBody, TodoContainer, TodoForm, TodoHeader } from './styled';
import { Props } from './types';

export const Todo: FC<Props> = memo(({ todo, id }) => {
    const { todo: tasks, setTodo: setTasks } = useTodoContext();
    const [remainingTasks, setRemainingTasks] = useState(0);
    const addTaskInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (id !== undefined && todo?.length) {
            setRemainingTasks(todo?.filter((taskItem) => taskItem.done === false).length || 0);
        } else setRemainingTasks(tasks?.filter((taskItem) => taskItem.done === false).length || 0);
    }, [id, tasks, todo]);

    function addTask() {
        if (addTaskInput?.current) {
            const newTask = addTaskInput?.current.value;
            if (newTask) {
                const newTaskObj = {
                    text: newTask,
                    done: false,
                };

                if (id !== undefined) {
                    if (!todo?.some((task) => task.text === newTask)) {
                        setTasks?.((tasks: ITodo[]) => {
                            return tasks.map((task, index) =>
                                index === id
                                    ? { ...task, todo: [{ ...newTaskObj, done: task.done }, ...(task?.todo || [])] }
                                    : task,
                            );
                        });
                    }
                } else if (id === undefined && !tasks?.some((task) => task.text === newTask)) {
                    setTasks?.((tasks) => {
                        return [...tasks, newTaskObj];
                    });
                }
                addTaskInput.current.value = '';
                addTaskInput.current.focus();
            }
        }
    }

    function handleKey({ keyCode, target }: { keyCode: number; target: any }) {
        if (keyCode === 13) {
            addTask();
        } else if (addTaskInput?.current) {
            if (!todo?.some((task) => task.text === target.value)) {
                addTaskInput?.current.classList.remove('invalid');
            } else if (!tasks?.some((task) => task.text === target.value)) {
                addTaskInput?.current.classList.remove('invalid');
            } else {
                addTaskInput?.current.classList.add('invalid');
            }
        }
    }

    return (
        <StyledContainer className="main">
            <TodoContainer className="todo">
                {id === undefined && (
                    <TodoHeader className="todo-header">
                        <Text textVariant="h3">Todo List</Text>
                        <Text textVariant="h5">
                            {tasks?.length && remainingTasks === 0 ? (
                                'All done! =D'
                            ) : (
                                <>
                                    You have <strong>{remainingTasks}</strong> of{' '}
                                    <strong>{todo?.length || tasks?.length}</strong> tasks remaining
                                </>
                            )}
                        </Text>
                    </TodoHeader>
                )}
                <TodoForm className="todo-form">
                    <StyledInput ref={addTaskInput} type="text" placeholder="Add task..." onKeyUp={handleKey} />
                    <StyledButton onClick={addTask}>+</StyledButton>
                </TodoForm>
                <TodoBody className="todo-body">
                    {id !== undefined ? <List todo={todo || []} id={id} /> : <List />}
                </TodoBody>
            </TodoContainer>
        </StyledContainer>
    );
});

Todo.displayName = 'Todo';
