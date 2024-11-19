import { TodoDetails } from '../../features/Todo/types';

export type TasksProps = {
  name?: string
  todos: TodoDetails[];
  count: number;
  setCount: (count: number) => void;
}
