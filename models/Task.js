'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task_name:{
    type: String,
    required: true
  },
  tags:{
    type: Array,
    required:false
  }
},{
  timestapms:{
    createdAt: 'created_at'
  }
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
