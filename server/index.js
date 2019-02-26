const express = require('express');
const DB = require('../database/index.js');

const app = express();
const port = 8002;

app.use(express.static(__dirname + '/../public'));
app.use(express.json());

app.get('/products', (req, res) => {
  let model = req.query.model;
  // console.log(Shoes);
  DB.Shoes.sync()
    .then(()=>{
      return DB.Shoes.findAll({
        where: {
          model: model
        }
      });
    })
    .then((data) => {
    // console.log(data);
      res.json(data);
    });
});

app.get('/images', (req, res) => {
  let imageID = req.query.imageID;
  DB.Images.sync()
    .then(()=>{
      return DB.Images.findOne({
        where: {
          img_id: imageID
        }
      });
    })
    .then((data) => {
    // console.log(data.links.split('***'));
      res.json(data.links.split('***'));
    });
});



app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
});

module.exports = app;