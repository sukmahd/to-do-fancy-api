'use strict'

const User = require('../models/User')
const jwt = require('jsonwebtoken')
const helper = require('../helpers/registerHelpers')

function signup(req,res){
  const key = helper.randomKey();
  const pass = helper.hash(req.body.password, key)
  User.create({
    name: req.body.name,
    password: pass,
    email: req.body.email,
    key: key
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err =>{
    res.send(err)
  })
}

function signin(req, res){
  User.findOne({
    email: req.body.email
  })
  .then(row=>{
    const key = row.key
    const pass = helper.hash(req.body.password, key )
    if(row.password == pass){
      const token = jwt.sign({
        name:row.name,
        email: row.email,
        task_list: row.task_list
      }, 'YttsA')
      req.headers.token = token
      res.send(token)
    }else {
      res.send('password salah')
    }
  })
  .catch(err =>{
    res.send(err)
  })
}

function addTask(req, res){
  User.where({
    _id: req.params.id
  })
  .update({
    $push:{
      task_list: req.body.task_list
    }
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.send(err)
  })
}

function removeTask(req, res){
  User.findOne({
    _id:req.params.id
  })
  .then(row=>{
    const task = row.task_list;
    for(let i = 0; i < task.length; i++){
      if(task[i] == req.params.idT){
        task.splice(i,1)
      }
    }
    User.where({
      _id:req.params.id
    })
    .update({
      task_list: task
    })
    .then(log=>{
      res.send(log)
    })
    .catch(err=>{
      res.send(log)
    })
  })
  .catch(err=>{
    res.send(err)
  })
}

function showTask(req, res){
  User.findOne({
    _id:req.params.id
  })
  .populate('task_list')
  .then(result=>{
    res.send(result)
  })
  .catch(err=>{
    res.send(err)
  })
}


module.exports = {
  signup,
  addTask,
  signin,
  removeTask,
  showTask
};
