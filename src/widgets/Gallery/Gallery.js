import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { PhotoCounter } from 'features';
import { Photos } from 'features';
import { usePhotosStore } from 'shared/store';
import { Preloader } from 'shared/ui';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photoStore = usePhotosStore();

  useEffect(() => {
    const { photoCount } = photoStore;
    if (!photoStore.photoCount) return;
    console.log({ photoCount });
    photoStore.getPhotos(photoStore.photoCount);
  }, [photoStore.photoCount]);

  return (
    <div className={classes.gallery}>
      <PhotoCounter name={'Photo count'} />
      <Photos photos={photoStore.photos} />
      <Preloader isActive={photoStore.isPhotosLoading} />
    </div>
  );
};
