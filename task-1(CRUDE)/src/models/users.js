const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

module.exports = Users;
