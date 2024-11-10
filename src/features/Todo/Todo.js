import classes from './Todos.module.scss';
import { Card } from 'entity';

/**
 * @typedef {import('./types').TodoProps} TodoProps
 */

/**
 * @function Todo
 * @param {TodoProps} props
 * @returns {JSX.Element}
 */

export const Todo = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((todo) =>
        <Card key={todo.id}
          id={todo.id}
          name={todo.title}
        />)
      }
    </ul>
  );
};
