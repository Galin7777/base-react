import classes from './Tasks.module.scss';
import { useEffect } from 'react';
import { TodoCounter } from 'features';
import { Todo } from 'features';
import { useTodosStore } from 'shared/stor';
import { Preloader } from 'shared/ui';

/**
 * @function Tasks
 * @returns {JSX.Element}
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
      {/* <p>{props.nam}</p> */}
      <Preloader isActive={todoStore.isTodosLoading} />
      <TodoCounter name={'Todo count'}/>
      <Todo todos={todoStore.todos} />
    </div>
  );
};
