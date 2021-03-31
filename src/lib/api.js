
import axios from 'axios';

export const getPhotos = async () => {
  const corsAPIHost = 'cors-anywhere.herokuapp.com';
  const corsAPIUrl = `https://${corsAPIHost}/`;
  const response = await axios(`${corsAPIUrl}https://api.flickr.com/services/feeds/photos_public.gne?format=json`);

  return response.data;
};

export default getPhotos;
