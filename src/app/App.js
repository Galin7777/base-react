import classes from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { usePhotosStore } from 'shared/store';
import { useTodosStore } from 'shared/store';
import { HomePage } from 'pages';
import { PhotoPage } from 'pages';
import { TodoPage } from 'pages';
import { PhotosPage } from 'pages';
import { TodosPage } from 'pages';
import { Header } from 'widgets';

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
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/photos'} element={<PhotosPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/photo/:photoId'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
