import { all, fork } from 'redux-saga/effects';

import getPhotoSaga from './watchers/getPhotos';

export default function* root() {
  yield all([
    fork(getPhotoSaga),
  ]);
}
