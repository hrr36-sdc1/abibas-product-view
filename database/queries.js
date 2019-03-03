const knex = require('./knex.js');

// *** tables *** //
function Shoes() {
  return knex('shoes');
}

function Images() {
  return knex('images');
}

// *** queries *** //

function getAllShoes() {
  return Shoes().select();
}

function getSingleShoeById(shoeId) {
  return Shoes().where('id', parseInt(shoeId, 10)).first();
}

function getSingleShoeByModel(shoeModel) {
  return Shoes().where('model', shoeModel).first();
}

function getAllImages() {
  return Images().select();
}

function getAllImagesById(imageId) {
  return Images().where('id', parseInt(imageId, 10)).first();
}

function getAllImagesForShoeId(shoeId) {

}

module.exports = {
  getAllShoes,
  getSingleShoeById,
  getSingleShoeByModel,
  getAllImages,
  getAllImagesById,
  getAllImagesForShoeId,
};
