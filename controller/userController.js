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
    key: key,
    tag: 'home'
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
        id: row._id,
        name:row.name,
        email: row.email,
        task_list: row.task_list,
        tag: row.tag
      }, 'YttsA')
      req.headers.token = token
      console.log(token, 'ini token waktu login');
      res.send({token:token, id: row._id})
    }else {
      console.log('salah pass');
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

function addTag(req,res){
  User.where({
    _id:req.params.id
  })
  .update({
    $push:{
      tag:req.body.tag
    }
  })
  .then(log=>{
    res.send(log)
  })
  .catch(err=>{
    res.send(err)
  })
}

function removeTag(req,res){
  User.where({
    _id:req.params.id
  })
  .update({
    tag: req.body.tag
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
  const token = req.headers.token
  console.log(token, 'asdasd');
  jwt.verify(token, 'YttsA', function(err, decode){
    User.findOne({
      _id:decode.id
    })
    .populate('task_list')
    .then(result=>{
      res.send(result)
    })
    .catch(err=>{
      res.send(err)
    })
  })
}


module.exports = {
  signup,
  addTask,
  signin,
  removeTask,
  showTask,
  addTag,
  removeTag
};
