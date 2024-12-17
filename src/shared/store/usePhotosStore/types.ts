export type PhotoFromAPI = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type PhotoStore = {
  /* Photo count state */
  photoCount: number;
  setPhotoCount: (photoCount: number) => void;

  /* State for photos  store */
  isPhotosLoading: boolean;
  photos: PhotoFromAPI[] | [];
  photosErrorMessage: string;
  getPhotos: (count: number) => void;
  resetPhotos: () => void;

  /* State for photo store */
  isPhotoLoading: boolean;
  photo: PhotoFromAPI | null;
  photoErrorMessage: string;
  getPhotoById: (photoId: string) => void;
  resetPhoto: () => void;
};

export type SetterCallback = (store: PhotoStore) => PhotoStore;
export type StoreCreator = (set: Function) => PhotoStore;
