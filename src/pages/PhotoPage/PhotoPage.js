import { useParams } from 'react-router-dom';
import { usePhotosStore } from 'shared/hooks';

/**
 *@function PhotoPage
 * @returns {JSX.Element}
 */

export const PhotoPage = () => {
  const params = useParams();
  const photosStore = usePhotosStore();
  const photo = photosStore.photos
    .find((photo) => photo.id === Number(params.photoId));

  if (!photo) return <div>Photo not found or loading</div>;

  return (
    <div>
      <h2>{photo.title}</h2>
      <img src={photo.url}
        alt={photo.title} />
    </div>
  );
};
