import { put, takeLatest, call } from 'redux-saga/effects';

import { GET_PHOTOS_SAGA } from '../../constants';
import { setPhotos } from '../../actions';
import { getPhotos } from '../../lib/api';

function* workerGetPhotosSaga() {
  const photos = yield call(getPhotos);
  yield put(setPhotos(photos));
}

export default function* workerGetPhotoSaga() {
  yield takeLatest(GET_PHOTOS_SAGA, workerGetPhotosSaga);
}
