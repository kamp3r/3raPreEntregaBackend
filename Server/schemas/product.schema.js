const Joi = require('joi');

const _id = Joi.string();
const title = Joi.string().min(4).max(80);
const price = Joi.number().integer().min(399);
const thumbnail = Joi.string().uri();
const description = Joi.string().min(4).max(500);
const code = Joi.string().min(4).max(80);
const stock = Joi.number().integer().min(0);
const createdAt = Joi.date();
const updateAt = Joi.date();

const getProductSchema = Joi.object({
  id: _id.required(),
});

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
  thumbnail: thumbnail.required(),
  description: description.required(),
  code: code.required(),
  stock: stock.required(),
  createdAt: createdAt,
  updateAt: updateAt,
});

const updateProductSchema = Joi.object({
  id: _id,
  title: title,
  price: price,
  thumbnail: thumbnail,
  description: description,
  code: code,
  stock: stock,
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema };
