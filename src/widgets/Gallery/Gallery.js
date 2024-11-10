import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { PhotoCounter, Photos } from 'features';
import { usePhotos } from 'shared/hooks';

/**
 * @function Gallery
 * @returns {JSX.Element}
 */

export const Gallery = () => {
  const photoState = usePhotos();

  useEffect(() => {
    const { photoCount } = photoState;
    if (!photoState.photoCount) return;
    console.log({ photoCount });
    photoState.getPhotos(photoState.photoCount);
  }, [photoState.photoCount]);

  return (
    <div className={classes.gallery}>
      <PhotoCounter name={'Photo count'}/>
      <Photos photos={photoState.photos} />
    </div>
  );
};
