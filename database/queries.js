const knex = require('./knex.js');

/*                *
*     TABLES      *
*                 */
function Shoes() {
  return knex('shoes');
}

function Images() {
  return knex('images');
}

/*                *
*   SHOE QUERIES  *
*                 */

/* GET */
function getAllShoes() {
  return Shoes().select();
}

function getAllShoesByModel(model) {
  return Shoes().where('model', model).whereRaw('id > ?', [11000000]).limit(5);
}

function getSingleShoeById(shoeId) {
  return Shoes().where('id', parseInt(shoeId, 10)).first();
}

function getSingleShoeByModel(shoeModel) {
  return Shoes().where('model', shoeModel).first();
}

function getSingleShoeByIdWithRelatedImages(shoeId) {
  return Shoes()
    .join('images', 'shoes.image_id', '=', 'images.id')
    .where('shoes.id', parseInt(shoeId, 10))
    .select()
    .first();
}

/* PUT */
function updateShoeById(id, data) {
  return Shoes().where('id', id).update({ ...data });
}

/* POST */
function insertShoe(data) {
  return Shoes().insert(data);
}

/* DELETE */
function deleteShoeById(id) {
  return Shoes().where('id', id).del();
}

/*                *
*  IMAGE QUERIES  *
*                 */

/* GET */
function getAllImages() {
  return Images().select();
}

function getAllImagesById(imageId) {
  return Images().where('id', parseInt(imageId, 10)).first();
}

/* PUT */
function updateImageById(id, data) {
  return Images().where('id', id).update({ links: data });
}

/* POST */
function insertImage(data) {
  return Images().insert({ links: data });
}
/* DELETE */
function deleteImageById(id) {
  return Images().where('id', id).del();
}

module.exports = {
  getAllShoes,
  getAllShoesByModel,
  getSingleShoeById,
  getSingleShoeByModel,
  getSingleShoeByIdWithRelatedImages,
  updateShoeById,
  insertShoe,
  deleteShoeById,
  getAllImages,
  getAllImagesById,
  updateImageById,
  insertImage,
  deleteImageById,
};
