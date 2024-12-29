import classes from './Tasks.module.scss';
import { useEffect } from 'react';
import { TodoCounter } from 'features';
import { Todos } from 'features';
import { useTodosStore } from 'shared/store';
import { Preloader } from 'shared/ui';

/**
 * @function Tasks
 * @returns {import('react').JSX.Element}
 */

export const Tasks = (props) => {
  const todoStore = useTodosStore();

  useEffect(() => {
    const { todoCount } = todoStore;
    if (!todoStore.todoCount) return;
    console.log({ todoCount });
    todoStore.getTodos(todoStore.todoCount);
  }, [todoStore.todoCount]);

  return (
    <div className={classes.tasks}>
      <Preloader isActive={todoStore.isTodosLoading} />
      <TodoCounter name={'Todo count'}/>
      <Todos todos={todoStore.todos} />
    </div>
  );
};
