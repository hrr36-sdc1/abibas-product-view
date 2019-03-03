/* eslint-disable linebreak-style */

const request = require('supertest');
const app = require('../server/index.js');
const { data } = require('../database/fakeData.js');

describe('Server should route appropriately', () => {

  let postedItemToDelete;

  it('should respond properly to GET products', (done) => {
    request(app)
      .get('/products?model=UltraBoost All Terrain Shoes')
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should 204 GET when no products found', (done) => {
    request(app)
      .get('/products')
      .then((res) => {
        expect(res.statusCode).toBe(204);
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

  // TODO: test PUT

  it('should respond properly to DELETE products', (done) => {
    request(app)
      .delete(`/products/${postedItemToDelete}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });

  it('should respond properly to GET images', (done) => {
    request(app)
      .get('/images/?imageID=1')
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

  // TODO: test PUT

  it('should respond properly to DELETE images', (done) => {
    request(app)
      .delete(`/images/${postedItemToDelete}`)
      .then((res) => {
        expect(res.statusCode).toBe(200);
        done();
      });
  });
});
