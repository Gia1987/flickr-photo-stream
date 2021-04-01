import { put, take,fork, call } from 'redux-saga/effects';

import { GET_PHOTOS_SAGA } from '../../constants';
import { setPhotos } from '../../actions';
import { getPhotos } from '../../lib/api';

function* getPhoto({ tags }) {
 
  const photos = yield call(getPhotos, tags );
  yield put(setPhotos(photos));
}

function* getPhotoSaga() {
  const { type, tags } = yield take([GET_PHOTOS_SAGA]);

  if (type === GET_PHOTOS_SAGA) {
    yield fork(getPhoto, tags );
  }
}

export default getPhotoSaga;