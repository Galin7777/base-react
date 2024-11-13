import classes from './Tasks.module.scss';
import { useEffect } from 'react';
import { TodoCounter, Todo } from 'features';
import { useTodosStore } from 'shared/hooks';

/**
 * @function Tasks
 * @returns {JSX.Element}
 */

export const Tasks = () => {
  const todoState = useTodosStore();

  useEffect(() => {
    const { todoCount } = todoState;
    if (!todoState.todoCount) return;
    console.log({ todoCount });
    todoState.getTodos(todoState.todoCount);
  }, [todoState.todoCount]);

  return (
    <div className={classes.tasks}>
      <TodoCounter name={'Todo count'}/>
      <Todo todos={todoState.todos} />
    </div>
  );
};
