import { useEffect, useState } from 'react';
import classes from './App.module.scss';
import { Gallery, Tasks } from 'widgets';
import { usePhotosStore, useTodosStore } from 'shared/hooks';
import { Preloader } from '../shared/ui/Preloader';

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
  const photoState = usePhotosStore();
  const todosState = useTodosStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Устанавливаем количество фотографий и задач
      await Promise.all([
        photoState.setPhotoCount(defaultCount),
        todosState.setTodoCount(defaultCount),
      ]);

      setIsLoading(false); // Скрываем прелоудер после загрузки
    };

    loadData();
  }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только один раз при монтировании

  return (
    <div className={classes.app}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <h3>{props.name}</h3>
          <Gallery />
          <Tasks />
        </>
      )}
    </div>
  );
};
