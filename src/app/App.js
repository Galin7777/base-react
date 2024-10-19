import './App.css';
import { useEffect, useState } from 'react';
import { Counter } from 'features';
import { Card } from '../entity';

export const App = (props) => {
  const startCount = 1;
  const [count, setCount] = useState(startCount);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endPoint}`);
      const photos = await response.json();
      setCards(photos);
    })();
  }, [count]);

  return (
    <div className="app">
      <h3>{props.name}</h3>
      <Counter count={count} setCount={setCount}
      />
      {cards.map((card) => (
        <Card cardData={card} />
      ))}
    </div>
  );
};
