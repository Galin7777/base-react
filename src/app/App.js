import classes from './App.module.scss';
import { useEffect } from 'react';
import { Gallery, Tasks } from 'widgets';
import { usePhotos, useTodo } from 'shared/hooks';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const defaultCount = 4;
  const photoState = usePhotos();
  const todosState = useTodo();

  useEffect(() => {
    photoState.setPhotoCount(defaultCount);
  }, []);

  useEffect(() => {
    todosState.setTodoCount(defaultCount);
  }, []);

  return (
    <div className={classes.app}>
      <h3>{props.name}</h3>
      <Gallery />
      <Tasks />
    </div>
  );
};
