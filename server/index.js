/* eslint-disable linebreak-style */
/* eslint-disable camelcase */

const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const cluster = require('cluster');
const os = require('os');

const { redisMiddleware } = require('./redisMiddleware');
const queries = require('../database/queries');

// Include the cluster module

// Code to run if we're in the master process
if (cluster.isMaster) {
  // Count the machine's CPUs
  const cpuCount = os.cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
// Code to run if we're in a worker process
} else {
  const app = express();

  app.use(cors());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../public')));


  app.get('*.gz', redisMiddleware, (req, res, next) => {
    res.set('Content-Encoding', 'gzip');
    next();
  });

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

  const port = 8002;

  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
}

// module.exports = app;
