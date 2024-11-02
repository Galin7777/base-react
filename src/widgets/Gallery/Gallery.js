import classes from './Gallery.module.scss';
import { useEffect } from 'react';
import { Counter, Photos } from 'features';
import { usePhotos } from 'shared/hooks';

/**
 * @typedef {import('./types').GalleryProps} GalleryProps
 */

/**
 * @function Gallery
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */


export const Gallery = (props) => {
  const photosStore = usePhotos();

  useEffect(() => {
    console.log('Photos:', photosStore.photos);
  }, [photosStore.photos]);

  return (
    <div className={classes.gallery}>
      <Counter name={'Photo count'}
        count={props.count}
        setCount={props.setCount}
      />
      <Photos photos={props.photos} />
    </div>
  );
};
