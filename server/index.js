/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

const express = require('express');
const compression = require('compression');
const cors = require('cors');
const path = require('path');

const { redisMiddleware } = require('./redisMiddleware');
const queries = require('../database/queries');

const app = express();

app.use(cors());
app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/products', redisMiddleware, (req, res) => {
  const { model } = req.query;
  queries.getAllShoesByModel(model)
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

app.get('/products/:productId', redisMiddleware, (req, res) => {
  const { productId } = req.params;
  queries.getSingleShoeByIdWithRelatedImages(productId)
    .then(data => res.json(data))
    .catch(err => console.log(err));
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

app.get('/images', redisMiddleware, (req, res) => {
  const { image_id } = req.query;
  queries.getAllImagesById(image_id)
    .then(data => res.json(data.links.split('***')))
    .catch(err => console.log(err));
});

app.get('/images/:imageId', redisMiddleware, (req, res) => {
  const { imageId } = req.params;
  queries.getAllImagesById(imageId)
    .then(data => res.json(data.links))
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
