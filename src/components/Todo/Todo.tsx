import { Text } from '@components/Lib';
import { useTodoContext } from '@context/TodoProvider';
import { FC, memo, useEffect, useRef, useState } from 'react';
import List from './List';
import { StyledButton, StyledContainer, StyledInput, TodoBody, TodoContainer, TodoForm, TodoHeader } from './styled';

export const Todo: FC = memo(() => {
    const { todo: tasks, setTodo: setTasks } = useTodoContext();
    const [remainingTasks, setRemainingTasks] = useState(0);
    const addTaskInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setRemainingTasks(tasks?.filter((taskItem) => taskItem.done === false).length || 0);
    }, [tasks]);

    function addTask() {
        if (addTaskInput?.current) {
            const newTask = addTaskInput?.current.value;
            if (newTask && !tasks?.some((task) => task.text === newTask)) {
                const newTaskObj = {
                    text: newTask,
                    done: false,
                };
                setTasks?.((tasks) => {
                    return [...tasks, newTaskObj];
                });
                addTaskInput.current.value = '';
                addTaskInput.current.focus();
            }
        }
    }

    function handleKey({ keyCode, target }: { keyCode: number; target: any }) {
        if (keyCode === 13) {
            addTask();
        } else if (addTaskInput?.current) {
            if (!tasks?.some((task) => task.text === target.value)) {
                addTaskInput?.current.classList.remove('invalid');
            } else {
                addTaskInput?.current.classList.add('invalid');
            }
        }
    }

    return (
        <StyledContainer className="main">
            <TodoContainer className="todo">
                <TodoHeader className="todo-header">
                    <Text textVariant="h3">Todo List</Text>
                    <Text textVariant="h5">
                        {tasks?.length && remainingTasks === 0 ? (
                            'All done! =D'
                        ) : (
                            <>
                                You have <strong>{remainingTasks}</strong> of <strong>{tasks?.length}</strong> tasks
                                remaining
                            </>
                        )}
                    </Text>
                </TodoHeader>
                <TodoForm className="todo-form">
                    <StyledInput ref={addTaskInput} type="text" placeholder="Add task..." onKeyUp={handleKey} />
                    <StyledButton onClick={addTask}>
                        <Text textVariant="h4">+</Text>
                    </StyledButton>
                </TodoForm>
                <TodoBody className="todo-body">
                    <List />
                </TodoBody>
            </TodoContainer>
        </StyledContainer>
    );
});

Todo.displayName = 'Todo';
