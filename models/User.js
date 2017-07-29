'use strict'

const mongoose = require('monggose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  task_list: {
    [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }]
  }
})

const User = mongoose.model('User', userSchema);

module.exports = User;
