import classes from './App.module.scss';
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { usePhotosStore } from 'shared/store';
import { useTodosStore } from 'shared/store';
import { usePostsStore } from 'shared/store';
import { HomePage } from 'pages';
import { PhotoPage } from 'pages';
import { TodoPage } from 'pages';
import { PhotosPage } from 'pages';
import { TodosPage } from 'pages';
import { PostPage } from 'pages';
import { PostsPage } from 'pages';
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
  const postStore = usePostsStore();

  useEffect(() => {
    photoStore.setPhotoCount(defaultCount);
    todoStore.setTodoCount(defaultCount);
    postStore.setPostCount(defaultCount);
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.app}>
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/photos'} element={<PhotosPage />} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/posts'} element={<PostsPage />} />
          <Route path={'/photo/:photoId'} element={<PhotoPage />} />
          <Route path={'/todo/:todoId'} element={<TodoPage />} />
          <Route path={'/post/:postId'} element={<PostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
