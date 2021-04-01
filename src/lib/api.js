import axios from 'axios';

export const getPhotos = async (tags) => {
  const response = await axios(`/photos`, { params: { tags } });
  const json = response.data.photos.replace('jsonFlickrFeed(', '').substring(0, response.data.photos.length - 1);

  return JSON.parse(json.substring(0, json.length - 1));

};

export default getPhotos;
