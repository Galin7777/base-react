import { TodosDetails } from '../../features/Todo/types';

export type TasksProps = {
  name?: string
  todos: TodosDetails[];
  count: number;
  setCount: (count: number) => void;
}
