/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

const express = require('express');
const queries = require('../database/queries');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.get('/products', (req, res) => {
  const { model } = req.query;

  queries.getAllShoesByModel(model)
    .then((data) => {
      if (data.length === 0) {
        res.sendStatus(204);
      } else {
        res.json(data);
      }
    });
});

app.post('/products', (req, res) => {
  queries.insertShoe(req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.put('/products/:productId', (req, res) => {
  queries.updateShoeById(req.params.productId, req.body)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.delete('/products/:productId', (req, res) => {
  queries.deleteShoeById(req.params.productId)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.get('/images', (req, res) => {
  const { image_id } = req.query;
  queries.getAllImagesById(image_id)
    .then(data => res.json(data.links.split('***')))
    .catch(err => console.log(err));
});

app.post('/images', (req, res) => {
  const images = req.body.images.join('***');
  queries.insertImage(images)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.put('/images/:imageId', (req, res) => {
  queries.updateImageById(req.params.imageId, req.body.images.join('***'))
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.delete('/images/:imageId', (req, res) => {
  queries.deleteImageById(req.params.imageId)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

module.exports = app;
