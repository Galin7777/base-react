import classes from './TodoPage.module.scss';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTodosStore } from 'shared/stor';
import { getRandomColor } from 'shared/utils';

/**
 *@function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const params = useParams();
  const todosStore = useTodosStore();

  if (!params.todoId) return <p>Invalid photo id</p>;

  useEffect(() => {
    if (!params.todoId) return;
    todosStore.getTodoById(params.todoId);
  }, []);

  const todo = todosStore.todo;

  if (!todo) return <p>Task not found</p>;

  const background = getRandomColor();

  return (
    <div className={classes.todoPage}
      style={{ background }}
    >
      <h2>{todo.title}</h2>
    </div>
  );
};
