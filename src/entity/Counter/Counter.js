import classes from './Counter.module.scss';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = ({ count, setCount, name }) => {
  const photosStore = usePhotos();

  const newMinCount = count <= 0;
  const newMaxCount = count >= 9;

  const handleAddCount = () => {
    if (newMaxCount) return;
    setCount(count + 1);
  };

  const handleReduceCount = () => {
    if (newMinCount) return;
    setCount(count - 1);
  };

  return (
    <div className={classes.counter}>
      <h1>{name}</h1>
      <div>
        <button className={classes.button}
          onClick={handleReduceCount}> minus </button>
        <button className={classes.button} onClick={handleAddCount}> plus </button>
      </div>
      <p>
        <button className={classes.button} onClick={() => setCount(1)}> reset </button>
      </p>
      <p>Counter:{count}</p>
    </div>
  );
};
