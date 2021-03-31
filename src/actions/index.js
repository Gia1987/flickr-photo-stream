import { GET_PHOTOS_SAGA, PHOTOS } from '../constants';

export function setPhotos(photos) {
  return {
    type: PHOTOS,
    photos
  };
}

// Sagas
export function getPhotosSaga() {
  return {
    type: GET_PHOTOS_SAGA
  };
}
