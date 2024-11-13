import { Counter } from 'entity';
import { useTodosStore } from 'shared/hooks';

/**
 * @typedef {import('./types').TodoCounterProps} Props
 */

/**
 * @function TodoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodoCounter = (props) => {
  const todoState = useTodosStore();

  return (
    <Counter name={'Todo count'}
      count={todoState.todoCount}
      setCount={todoState.setTodoCount}
    />
  );
};
