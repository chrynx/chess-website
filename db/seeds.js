const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const User = require('../models/user');
const { dbURI } = require('../config/environment');// ==================================POSTS==============================================

const userData = [
  {
    username: 'userAdmin',
    rank: 5,
    xp: 999,
    email: 'useradmin@hertfordchess.com',
    password: 'password',
    passwordConfirmation: 'password'
  }
];

mongoose
  .connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => User.create(userData))
  .then(users => console.log(users.length + ' users created!'))
  .catch(err => console.log(err))
  .finally(() => {
    mongoose.connection.close();
  });
