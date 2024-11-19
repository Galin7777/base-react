import { useParams } from 'react-router-dom';
import { useTodosStore } from 'shared/hooks';

/**
 *@function TodoPage
 * @returns {JSX.Element}
 */

export const TodoPage = () => {
  const { todoId } = useParams();
  const todosStore = useTodosStore();
  const todo = todosStore.todos
    .find((todo) => todo.id === Number(todoId));

  if (!todo) return <div>Task not found or loading</div>;

  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
};
