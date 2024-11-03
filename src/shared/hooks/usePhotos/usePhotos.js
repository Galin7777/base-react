/**
 * @typedef {import('./types').PhotosStateCreator} StateCreator
 */

import { create } from 'zustand';

export const usePhotos = create(/** @type {StateCreator} */(set) => ({
  photos: [{
    albumId: 1,
    id: 1,
    title: 'title',
    url: 'url',
    thumbnailUrl: 'url',
  }],
  isPhotosLoading: false,
  photosErrorMessage: '',
  getPhotos: async (count) => {
    // Описываем логику с получением  от Апи фотографии
    // Записываем их в хранилище с помощью set хранилище
    // Если получили ошибку - записываеи ошибку в photosErrorMessage
  },
  resetPhotos: () => set(() => ({ photos: [] })),
}));



