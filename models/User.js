'use strict'

const mongoose = require('mongoose')
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
    required: true,
    unique: true
  },
  tag:{
    type: Array,
    required:false
  },
  key:{
    type: String,
    required:true
  },
  task_list:   [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;
