import classes from './Counter.module.scss';
import { usePhotosStore } from 'shared/hooks';

/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = ({ count, setCount, name }) => {
  const photosStore = usePhotosStore();

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
      {/* Name */}
      <h1>{name}</h1>
      <div>
        {/* Minus */}
        <button className={classes.button}
          disabled={newMinCount}
          onClick={handleReduceCount}
        >
          minus
        </button>
        {/* Plus */}
        <button className={classes.button}
          disabled={newMaxCount}
          onClick={handleAddCount}
        >
          plus
        </button>
      </div>
      {/* Reset */}
      <p>
        <button className={classes.button}
          onClick={() => setCount(1)}
        >
          reset
        </button>
      </p>
      <p>Counter:{count}</p>
    </div>
  );
};
