import { Counter as UiCounter } from 'entity';
import { useTodosStore } from 'shared/store';

/**
 * @typedef {import('./types').TodoCounterProps} Props
 */

/**
 * @function Counter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const Counter = (props) => {
  const todoStore = useTodosStore();

  return (
    <UiCounter name={'Todo count'}
      count={todoStore.todoCount}
      setCount={todoStore.setTodoCount}
      minCount={1}
      maxCount={10}
      isDisabled={todoStore.isTodosLoading}
    />
  );
};
