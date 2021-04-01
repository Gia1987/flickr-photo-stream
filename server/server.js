const path = require('path');
const express = require('express');
const getPhotos = require('./getPhotos');

const app = express();
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   next();
 });

app.use(express.static(publicPath));

app.use('/photos', getPhotos);

app.listen(port, () => {
   // eslint-disable-next-line no-console
   console.log('Server is up!');
});