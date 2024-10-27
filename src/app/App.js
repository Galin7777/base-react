import './App.css';
import { useEffect, useState } from 'react';
import { Counter, Photos, Todos } from 'features';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').AppProps} AppProps
 */

/**
 * @function App
 * @param {AppProps} props
 * @returns {JSX.Element}
 */

export const App = (props) => {
  const startCount = 1;
  const [photoCount, setPhotoCount] = useState(startCount);
  const [photos, setPhotos] = useState([]);
  const [todoCount, setTodoCount] = useState(startCount);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const endPoint = `photos?_start=0&_limit=${photoCount}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const photos = await response.json();
      setPhotos(photos);
    })();
  }, [photoCount]);

  useEffect(() => {
    (async () => {
      const endPoint = `todos?_start=0&_limit=${todoCount}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const todos = await response.json();
      setTodos(todos);
    })();
  }, [todoCount]);

  return (
    <div className="app">
      <h3>{props.name}</h3>
      {/*Photo widgets*/}
      <div>
        <Counter name={'Photo count'}
          count={photoCount}
          setCount={setPhotoCount}
        />
        <Photos photos={photos} />
      </div>
      {/*Todo widgets*/}
      <div>
        <Tasks count={todoCount}
          setCount={setTodoCount}
        />
        <Todos todos={todos} />
      </div>
    </div>
  );
};
