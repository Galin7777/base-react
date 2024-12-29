import { TodoDetails } from '../../features/Todos/types';

export type TasksProps = {
  name?: string
  todos: TodoDetails[];
  count: number;
  setCount: (count: number) => void;
}
