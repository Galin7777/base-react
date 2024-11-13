import classes from './Card.module.scss';
import { getRandomColor } from '../../shared/utils/getRandomColor';
import { Preloader } from '../../shared/ui/Preloader';
import { useState, useEffect } from 'react';

/**
 * @typedef {import ('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Здесь можно установить задержку для имитации загрузки, например, данных из API
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 секунда задержки

    return () => clearTimeout(timer);
  }, []);

  return (
    <li className={classes.Card} style={{ background: getRandomColor() }}>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          {/* name */}
          {props.name && (
            <h2 className={classes.name}>
              {props.name}
            </h2>
          )}
          {/* image */}
          {props.image && (
            <img className={classes.image} src={props.image} alt={props.name} />
          )}
          {/* text */}
          {props.text && (
            <p className={classes.text}>
              {props.text}
            </p>
          )}
        </>
      )}
    </li>
  );
};
