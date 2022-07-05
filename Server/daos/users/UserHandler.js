const MongoHandler = require('../../services/mongoHandler');
const boom = require('@hapi/boom');
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcrypt');

class UserHandler extends MongoHandler {
  constructor() {
    super('users', {
      _id: { type: String },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true},
      role: { type: String, default: 'user', enum: ['user', 'admin'] },
      name: { type: String, required: true },
      lastName: { type: String, required: true },
      phone: { type: String, required: true, unique: true },
      profilePicture: { type: String },
      address: { type: String },
      createdAt: { type: Date},
    });
  }
  async createUser(data){
    try{
      const passwordHash = await bcrypt.hash(data.password, 10);
      const newUser = await this.collection.create({_id: uuidv4(),
        ...data,
        password: passwordHash,
        createdAt: new Date()
      });
      delete newUser._doc.password
      return newUser;
    }catch(error){
      throw boom.conflict('The data is already in use');
    }
  }
  async getUser(email, password) {
    try {
      const user = await this.collection.findOne({ email });
      if (!user) {
        throw boom.unauthorized('User not found');
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        throw boom.unauthorized('Invalid password');
      }
      delete user._doc.password;
      return user;
    } catch (err) {
      console.log(err);
    }
  }
  async updateUser(id, user) {
    try {
      const updatedUser = await this.collection.updateOne(
        { _id: id },
        { $set: user }
      );
      return updatedUser;
    } catch (err) {
      console.log(err);
    }
  }
  async deleteUser(id) {
    try {
      const deletedUser = await this.collection.deleteOne({ _id: id });
      return deletedUser;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserHandler;
