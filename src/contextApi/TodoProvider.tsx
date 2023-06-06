import { FC, PropsWithChildren, createContext, useContext, useState } from 'react';
import { ITodo, ITodoContext } from './types';

const initialValue: ITodo[] = [
    {
        text: 'Task 1',
        done: true,
    },
    {
        text: 'Task 2',
        done: true,
    },
    {
        text: 'Task 3',
        done: false,
    },
    {
        text: 'Task 4',
        done: false,
    },
    {
        text: 'Task 5',
        done: false,
    },
];

const TodoContext = createContext<ITodoContext>({});

export const TodoContextProvider: FC<PropsWithChildren> = ({ children }) => {
    const [todo, setTodo] = useState(initialValue);

    const value = { todo, setTodo };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodoContext = () => {
    return useContext(TodoContext);
};
