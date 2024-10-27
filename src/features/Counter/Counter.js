/**
 * @typedef {import('./types').CounterProps} CounterProps
 */

/**
 * @function Counter
 * @param {CounterProps} props
 * @returns {JSX.Element}
 */

export const Counter = ({ count, setCount, name }) => {
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
    <div className={'counter'}>
      <h1>{name}</h1>
      <button className={'button'}
        onClick={handleReduceCount}> minus </button>
      <button className={'button'} onClick={handleAddCount}> plus </button>
      <p>
        <button className={'button'} onClick={() => setCount(1)}> reset </button>
      </p>
      <p>Counter:{count}</p>
    </div>
  );
};
