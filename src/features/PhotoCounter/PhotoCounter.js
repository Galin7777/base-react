import { Counter } from 'entity';
import { usePhotosStore } from 'shared/hooks';

/**
 * @typedef {import('./types').PhotoCounterProps} Props
 */

/**
 * @function PhotoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotoCounter = (props) => {
  const photoState = usePhotosStore();

  return (
    <Counter name={'Photos count'}
      count={photoState.photoCount}
      setCount={photoState.setPhotoCount}
    />
  );
};
