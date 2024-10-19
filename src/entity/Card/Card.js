import './Card.css';

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
    <div className={'card'}>
      <h2>{props.cardData.title}</h2>
      <img src={props.cardData.thumbnailUrl} />
    </div>
  );
};
