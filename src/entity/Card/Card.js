import classes from './Card.module.scss';

/**
 * @typedef {import ('./types').CardProps} CardProps
 */

/**
 * @function Card
 * @param {CardProps} props
 * @returns {JSX.Element}
 */

export const Card = (props) => {
  return (
    <li className={classes.Card}>
      {/* name */}
      {props.name && (
        <h2 className={classes.name}>
          {props.name}
        </h2>
      )}
      {/* image */}
      {props.image && (
        <img className={classes.image}
          src={props.image}
          alt={props.name}
        />
      )}
      {/* text */}
      {props.text && (
        <p className={classes.text}>
          {props.text}
        </p>
      )}
    </li>
  );
};
