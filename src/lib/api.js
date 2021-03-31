
import axios from 'axios';

export const getPhotos = async () => {
  // const corsAPIHost = 'cors-anywhere.herokuapp.com';
  // const corsAPIUrl = `https://${corsAPIHost}/`;
  // const response = await axios(`${corsAPIUrl}https://api.flickr.com/services/feeds/photos_public.gne?format=json`);
  
  const response = await axios.get('https://api.flickr.com/services/feeds/photos_public.gne?format=json', {
        headers: {
          'Content-Type': 'text/plain',
          'Access-Control-Allow-Origin':'*'
        },
  });

  return response.data;
};

export default getPhotos;
