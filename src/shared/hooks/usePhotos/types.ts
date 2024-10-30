export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoStore = {
  count: number;
  photos: PhotoFromAPI[];
  isPhotosLoading: boolean;
  photosErrorMessage: string;
  getPhotos: () => void;
};
