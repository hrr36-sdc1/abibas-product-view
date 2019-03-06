/* eslint-disable linebreak-style */

const request = require('supertest');
const app = require('../server/index.js');
const { data } = require('../database/fakeData.js');

describe('Server should route appropriately', () => {
  /* Add beforeall / afterall for database testing */
  let postedItemToDelete;

  it('should respond properly to GET products', (done) => {
    request(app)
      .get('/products?model=UltraBoost All Terrain Shoes')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to POST products', (done) => {
    request(app)
      .post('/products')
      .send(data.product1)
      .then((res) => {
        postedItemToDelete = res.body.id;
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to PUT products', (done) => {
    data.product1.colors = 'Brown, Blue, Blue';
    request(app)
      .put('/products/1')
      .send(data.product1)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to DELETE products', (done) => {
    request(app)
      .delete('/products/1')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
  it('should respond properly to GET images', (done) => {
    request(app)
      .get('/images/1')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to POST images', (done) => {
    request(app)
      .post('/images')
      .send({ images: data.shoeLink1 })
      .then((res) => {
        postedItemToDelete = res.body.img_id;
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to PUT images', (done) => {
    request(app)
      .put('/images/3')
      .send({ images: ['www.blahblah.com'] })
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to DELETE images', (done) => {
    request(app)
      .delete('/images/1')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

});
