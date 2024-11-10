import { Counter } from 'entity';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').PhotoCounterProps} Props
 */

/**
 * @function PhotoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotoCounter = (props) => {
  const photoState = usePhotos();

  return (
    <Counter name={'Photos count'}
      count={photoState.photoCount}
      setCount={photoState.setPhotoCount}
    />
  );
};
