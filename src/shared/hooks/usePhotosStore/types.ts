export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoStore = {
  /* State for count */
  photoCount: number;
  setPhotoCount: (photoCount: number) => void;
  /* State for photos */
  photos: PhotoFromAPI[] | [];
  isPhotosLoading: boolean;
  photosErrorMessage: string;
  getPhotos: (count: number) => void;
  resetPhotos: () => void;
};

export type PhotoStateCreator = (set: Function) => PhotoStore;
export type SetterCallback = (state: PhotoStore) => PhotoStore;
