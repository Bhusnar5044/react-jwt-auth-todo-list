import { ITodo } from '@context/types';

export type Props = {
    taskId: number;
    task: ITodo;
    nestedTasks?: ITodo[];
    nested?: boolean;
    id?: number;
};
