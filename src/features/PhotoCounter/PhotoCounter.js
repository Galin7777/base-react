import { usePhotosStore } from 'shared/store';
import { Counter } from 'entity';
import { useEffect } from 'react';

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

  useEffect(() => {
    photoStore.setPhotoCount(1);
  }, []);

  return (
    <Counter name={'Photos count'}
      minCount={1}
      count={photoStore.photoCount}
      setCount={photoStore.setPhotoCount}
      maxCount={12}
      isDisabled={photoStore.isPhotosLoading}
    />
  );
};
