const Sequelize = require('sequelize');
const config = require('../config.js');
const { data } = require('./fakeData.js');
const faker = require('faker');

const dbTableName = process.env.NODE_ENV === 'prod' ? 'Products' : 'ProductsTest';

const sequelize = new Sequelize('', config.user, config.pw, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.query(`CREATE DATABASE ${dbTableName}`).then(()=> {
  const db = new Sequelize(dbTableName, config.user, config.pw, {
    host: 'localhost',
    dialect: 'mysql'
    }
  )

  const Images = db.define('images', {
    img_id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    links: {type: Sequelize.TEXT}
  })

  const Shoes = db.define('shoes', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    colors: { type: Sequelize.STRING, allowNull: false},
    type: { type: Sequelize.STRING, allowNull: false},
    model: { type: Sequelize.STRING, allowNull: false},
    sizes: { type: Sequelize.STRING, allowNull: false},
    price: { type: Sequelize.INTEGER, allowNull: false},
    image_ID: { type: Sequelize.INTEGER,
      references: {
          model: Images,
          key: 'img_id'
        }
    },
    review_count: { type: Sequelize.INTEGER, allowNull: false},
    avg_stars: { type: Sequelize.INTEGER, allowNull: false}
  });

  Images.sync()
    .then(() => {
      Images.create({links: data.shoeLink1.join('***')});
      Images.create({links: data.shoeLink2.join('***')});
      Images.create({links: data.shoeLink3.join('***')});
    })
    .then(()=>{
      Shoes.sync()
      .then(()=>{
        Shoes.create({
          colors: data.product1.color,
          type: data.product1.type,
          model: data.product1.model,
          sizes: data.product1.sizes,
          price: data.product1.price,
          image_ID: data.product1.image_ID,
          review_count: data.product1.review_count,
          avg_stars: data.product1.avg_stars
        });
        Shoes.create({
          colors: data.product2.color,
          type: data.product2.type,
          model: data.product2.model,
          sizes: data.product2.sizes,
          price: data.product2.price,
          image_ID: data.product2.image_ID,
          review_count: data.product2.review_count,
          avg_stars: data.product2.avg_stars
        });
        Shoes.create({
          colors: data.product3.color,
          type: data.product3.type,
          model: data.product3.model,
          sizes: data.product3.sizes,
          price: data.product3.price,
          image_ID: data.product3.image_ID,
          review_count: data.product3.review_count,
          avg_stars: data.product3.avg_stars
        });
        for (let i = 0; i < 100; i++){
          Shoes.create({
            colors: faker.commerce.color(),
            type: faker.lorem.words(),
            model: faker.commerce.productName(),
            sizes: faker.random.number(),
            price: faker.commerce.price(),
            image_ID: Math.ceil(Math.random()*3),
            review_count: faker.random.number(),
            avg_stars: Math.random()*5
          })
        }
      })

    })

})

