import { Counter } from 'entity';
import { useTodosStore } from 'shared/stor';

/**
 * @typedef {import('./types').TodoCounterProps} Props
 */

/**
 * @function TodoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const TodoCounter = (props) => {
  const todoStore = useTodosStore();

  return (
    <Counter name={'Todo count'}
      count={todoStore.todoCount}
      setCount={todoStore.setTodoCount}
      minCount={1}
      maxCount={10}
      isDisabled={todoStore.isTodosLoading}
    />
  );
};
