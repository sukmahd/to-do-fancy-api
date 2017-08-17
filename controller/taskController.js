'use strict'

const Task = require('../models/Task')


function createTask(req,res){
  Task.create({
    task_name: req.body.task_name,
    tags: req.body.tag,
    status: 'false'
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.send(err)
  })
}

function findTask(req, res){
  Task.findOne({
    _id: req.params.id
  })
  .then(row=>{
    res.send(row)
  })
  .catch(err=>{
    res.send(err)
  })
}

function deleteTask(req,res){
  Task.deleteOne({
    _id:req.params.id
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err =>{
    res.send(err)
  })
}

function editTask(req,res){
  Task.where({
    _id: req.params.id
  })
  .update({
    status: req.body.status
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.send(err)
  })
}

function getTask(req,res){
  Task.find()
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}

function addTag(req,res){
  Task.where({
    _id: req.params.id
  })
  .update({
    $push:{
      tags: req.body.tag
    }
  })
  .then(log=>(
    res.send(log)
  ))
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  createTask,
  deleteTask,
  editTask,
  getTask,
  addTag,
  findTask
};
