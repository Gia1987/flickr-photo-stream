import { PHOTOS } from '../constants';

const initialState = { photos: [] };

export default function photos(state = initialState, action) {
  switch (action.type) {
    case PHOTOS:
      return {
        ...state,
        photos: action.photos
      };
    default:
      return state;
  }
}
