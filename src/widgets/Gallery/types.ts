import { PhotoDetails } from '../../features/Photos/types';

export type GalleryProps = {
  name?: string;
  photos: PhotoDetails[];
  count: number;
  setCount: (count: number) => void;
}
