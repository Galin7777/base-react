import { Counter } from 'entity';
import { useTodo } from 'shared/hooks';

/**
 * @typedef {import('./types').TodoCounterProps} Props
 */

/**
 * @function TodoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodoCounter = (props) => {
  const todoState = useTodo();

  return (
    <Counter name={'Todo count'}
      count={todoState.todoCount}
      setCount={todoState.setTodoCount}
    />
  );
};
