const axios = require('axios');

const getPhotos = async (req, res) => {
  const param = req.query.tags ? req.query.tags : 'cats';
  
  const header = {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
  };
  const response = await axios
    .get(`https://api.flickr.com/services/feeds/photos_public.gne/?format=json&tags=${param}`, { headers: header })
    .then(photos => {
      // handle success
      return {
        status: 200,
        photos: photos.data
      };
    })
    .catch(() => {
      // handle error
      return { status: 400 };
    });

  res.send(response);
};

module.exports = getPhotos;