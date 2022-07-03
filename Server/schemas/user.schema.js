const Joi = require('joi');

const _id = Joi.string();
const name = Joi.string().min(4).max(80);
const lastName = Joi.string().min(4).max(80);
const phone = Joi.string().min(10).max(80);
const profilePicture = Joi.string().uri();
const address = Joi.string();
const email = Joi.string().email();
const password = Joi.string().min(4).max(80);
const createdAt = Joi.date();

const createUserSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone.required(),
    profilePicture: profilePicture,
    address: address.required(),
    email: email.required(),
    password: password.required(),
    createdAt: createdAt,
})

const updateUserSchema = Joi.object({
    _id: _id.required(),
    name: name,
    lastName: lastName,
    phone: phone,
    profilePicture: profilePicture,
    address: address,
    email: email,
    password: password,
})

module.exports = { createUserSchema, updateUserSchema };