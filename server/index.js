import express, { static, json } from 'express';
import { Shoes, Images } from '../database/index.js';

const app = express();
const port = 8002;

app.use(static(__dirname + '/../public'));
app.use(json());

app.get('/products', (req, res) => {
  let model = req.query.model;
  // console.log(Shoes);
  Shoes.sync()
    .then(()=>{
      return Shoes.findAll({
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
  Images.sync()
    .then(()=>{
      return Images.findOne({
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

export default app;