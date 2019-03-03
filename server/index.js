/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint linebreak-style: ["error", "windows"] */

const express = require('express');
var queries = require('../database/queries');

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

app.get('/products', (req, res) => {
  const { model } = req.query;
  queries.getAllShoes()
    .then((data) => {
      if (data.length === 0) {
        res.sendStatus(204);
      }
      res.json(data);
    });
});
/*
app.post('/products', (req, res) => {
  const product = req.body;
  DB.Shoes.sync()
    .then(() => {
      DB.Shoes.create({
        colors: product.colors,
        type: product.type,
        model: product.model,
        sizes: product.sizes,
        price: product.price,
        image_id: Math.ceil(Math.random() * 3),
        review_count: product.review_count,
        avg_stars: Math.random() * 5,
      })
        .then(data => res.json(data));
    })
    .catch(err => console.log(err));
});

app.put('/products/:productId', (req, res) => {
  DB.Shoes.sync()
    .then(() => {
      DB.Shoes.update(req.body, { where: { id: req.params.productId } })
        .then(data => res.json(data));
    })
    .catch(err => console.log(err));
});

app.delete('/products/:productId', (req, res) => {
  DB.Shoes.sync()
    .then(() => {
      DB.Shoes.destroy({
        where: { id: req.params.productId },
      })
        .then(data => res.json(data))
        .catch(err => console.log(err));
    });
});
*/
app.get('/images', (req, res) => {
  const { image_id } = req.query;
  console.log(req.query);
  queries.getAllImagesById(image_id)
    .then((data) => {
    // console.log(data.links.split('***'));
      res.json(data.links.split('***'));
    });
});
/*
app.post('/images', (req, res) => {
  const images = req.body.images.join('***');

  DB.Images.sync()
    .then(() => {
      DB.Images.create({
        links: images,
      })
        .then(data => res.json(data));
    })
    .catch(err => console.log(err));
});

app.put('/images/:imageId', (req, res) => {
  DB.Images.sync()
    .then(() => {
      DB.Images.update({ links: req.body.images.join('***') },
        { where: { img_id: req.params.imageId } })
        .then(data => res.json(data));
    })
    .catch(err => console.log(err));
});

app.delete('/images/:imageId', (req, res) => {
  DB.Images.sync()
    .then(() => {
      DB.Images.destroy({
        where: { img_id: req.params.imageId },
      })
        .then(data => res.json(data));
    })
    .catch(err => console.log(err));
});
*/
module.exports = app;
