import { usePhotosStore } from 'shared/hooks';
import { Counter } from 'entity';

/**
 * @typedef {import('./types').PhotoCounterProps} Props
 */

/**
 * @function PhotoCounter
 * @param {Props} props
 * @returns {JSX.Element}
 */

export const PhotoCounter = (props) => {
  const photoStore = usePhotosStore();

  return (
    <Counter name={'Photos count'}
      count={photoStore.photoCount}
      setCount={photoStore.setPhotoCount}
      minCount={1}
      maxCount={12}
      isDisabled={photoStore.isPhotosLoading}
    />
  );
};
