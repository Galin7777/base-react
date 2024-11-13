import { create } from 'zustand';
import { API_BASE_URL } from 'shared';

/**
 * @typedef {import('./types').PhotoStateCreator} StateCreator
 * @typedef {import('./types').SetterCallback} Setter
 * @typedef {import('./types').PhotoStore } State
 */

export const usePhotosStore = create(/** @type {StateCreator} */(set) => ({
  /* State for count */
  photoCount: 0,
  setPhotoCount: (photoCount) => set(/** @type {Setter}*/(state) => ({ ...state, photoCount })),
  /* State for photos */
  photos: [],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    try {
      set(/** @type {Setter}*/(state) => ({ ...state, isPhotosLoading: true }));
      const endPoint = `photos?_start=0&_limit=${count}`;
      const response = await fetch(`${API_BASE_URL}/${endPoint}`);
      const data = await response.json();
      set(/** @type {Setter}*/(state) => ({ ...state, photos: data, photosErrorMessage: '', isPhotosLoading: false }));
    } catch (error) {
      set(/** @type {Setter}*/(state) => ({ ...state, photosErrorMessage: 'The photos could not be loaded.', isPhotosLoading: false }));
    }
  },
  resetPhotos: () => set((/** @type {Setter} */state) => ({ ...state, photos: [] })),
}));
