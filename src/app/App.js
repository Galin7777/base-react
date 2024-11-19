import classes from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { usePhotosStore } from 'shared/hooks';
import { useTodosStore } from 'shared/hooks';
import { HomePage } from 'pages/HomePage/HomePage';
import { PhotoPage } from 'pages/PhotoPage';
import { TodoPage } from 'pages/TodoPage';

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
  const photoStore = usePhotosStore();
  const todoStore = useTodosStore();

  useEffect(() => {
    photoStore.setPhotoCount(defaultCount);
    todoStore.setTodoCount(defaultCount);
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <h3>
          <Link to={'/'}>{props.name}</Link>
        </h3>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/photo/:photoId'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
