import { useParams } from 'react-router-dom';
import { usePhotosStore } from 'shared/store';
import { useEffect } from 'react';
import { Preloader } from 'shared/ui';

/**
 *@function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const params = useParams();
  const photosStore = usePhotosStore();

  if (!params.photoId) return <p>Invalid photo id</p>;

  useEffect(() => {
    if (!params.photoId) return;
    photosStore.getPhotoById(params.photoId);
  }, []);

  if (!photosStore.photo) return <p>Photo not found or loading</p>;

  return (
    <>
      <div>
        <h2>{photosStore.photo.title}</h2>
        <img src={photosStore.photo.url}
          alt={photosStore.photo.title} />
      </div>
      <Preloader isActive={photosStore.isPhotoLoading} />
    </>
  );
};
