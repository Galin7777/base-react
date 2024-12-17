import classes from './TodoPage.module.scss';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useTodosStore } from 'shared/store';
import { getRandomColor } from 'shared/utils';

/**
 * @function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const [background, setBackground] = useState('');
  const params = useParams();
  const todosStore = useTodosStore();

  if (!params.todoId) return <p>Invalid task id</p>;

  useEffect(() => {
    if (!params.todoId) return;
    todosStore.getTodoById(params.todoId);
    const color = getRandomColor();
    setBackground(color);
  }, [params.todoId]);

  const todo = todosStore.todo;

  if (!todo) return <p>Task not found</p>;

  return (
    <div className={classes.todoPage} style={{ background }}>
      <h2 className={classes.taskTitle}>{todo.title}</h2>
    </div>
  );
};

