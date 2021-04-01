import axios from 'axios';

export const getPhotos = async () => {
  const response = await axios(`/photos`);
  const json = response.data.photos.replace('jsonFlickrFeed(', '').substring(0, response.data.photos.length - 1);

  return JSON.parse(json.substring(0, json.length - 1));

};

export default getPhotos;
