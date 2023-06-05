import { Task } from '../List/types';

export type Props = {
    taskId: number;
    task: Task;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};
