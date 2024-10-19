/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = ({ count, setCount }) => {
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
    <div>
      <p>
        <h1>Counter App</h1>
      </p>
      <button className={'button'}
        onClick={handleReduceCount}> minus </button>
      <button onClick={handleAddCount}> plus </button>
      <button onClick={() => setCount(1)}> reset </button>
      <p>Counter:{count}</p>
    </div>
  );
};
