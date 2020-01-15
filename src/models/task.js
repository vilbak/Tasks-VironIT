const mongoose = require('mongoose');

const Task = mongoose.model('Task', {
  name: {
    type: String
  },
  completion: {
    type: Boolean
  }
});

module.exports = Task;
