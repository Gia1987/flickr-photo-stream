import { all, fork } from 'redux-saga/effects';

import workerGetPhotoSaga from './watchers/getPhotos';

export default function* root() {
  yield all([
    fork(workerGetPhotoSaga),
  ]);
}
