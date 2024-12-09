import { create } from 'zustand';
import { API_BASE_URL } from 'shared/config';
import { partial } from 'shared/utils';

/**
 * @typedef {import('./types').StoreCreator} StoreCreator
 * @typedef {import('./types').SetterCallback} SetterCallback
 * @typedef {import('./types').PhotoStore} PhotoStore
 */

/**
 * @function setPhotoCount
 * @param {Function} set
 * @param {number} photoCount
 * @returns {void}
 */

const setPhotoCount = (set, photoCount) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    photoCount,
  }));
};

/**
 * @function getPhotos
 * @param {Function} set
 * @param {number} count
 * @returns {Promise<void>}
 */

const getPhotos = async (set, count) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: true,
      photos: [],
      photosErrorMessage: '',
    }));
    const endPoint = `photos?_start=0&_limit=${count}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Photos not received');
    const photos = await response.json();
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: false,
      photos,
      photosErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: false,
      photos: [],
      photosErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetPhotos
 * @param {Function} set
 * @returns {void}
 */

const resetPhotos = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    photos: [],
  }));
};

/**
 * @function getPhotoById
 * @param {Function} set
 * @param {string} id
 * @returns {Promise<void>}
 */

const getPhotoById = async (set, id) => {
  try {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: true,
      photo: null,
      photosErrorMessage: '',
    }));
    const endPoint = `photos/${id}`;
    const response = await fetch(`${API_BASE_URL}/${endPoint}`);
    if (!response.ok) throw new Error('Photo not received');
    const photo = await response.json();
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: false,
      photo,
      photosErrorMessage: '',
    }));
  } catch (/** @type {*} */ error) {
    set(/** @type {SetterCallback} */(store) => ({
      ...store,
      isPhotosLoading: false,
      photo: null,
      photosErrorMessage: error.message,
    }));
  }
};

/**
 * @function resetPhoto
 * @param {Function} set
 * @returns {void}
 */

const resetPhoto = (set) => {
  set(/** @type {SetterCallback} */(store) => ({
    ...store,
    photo: null,
  }));
};

/**
 * @function usePhotosStore
 * @returns {PhotoStore}
 */

export const usePhotosStore = create(/** @type {StoreCreator} */(set) => ({
  /* Photo count state */
  photoCount: 0,
  setPhotoCount: partial(setPhotoCount, set),

  /* State for photos */
  isPhotosLoading: false,
  photos: [],
  photosErrorMessage: '',
  getPhotos: partial(getPhotos, set),
  resetPhotos: partial(resetPhotos, set),

  /* State for photo store */
  isPhotoLoading: false,
  photo: null,
  photoErrorMessage: '',
  getPhotoById: partial(getPhotoById, set),
  resetPhoto: partial(resetPhoto, set),
}));
