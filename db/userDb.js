var express = require("express");
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var router = express.Router();
const { ObjectID } = require('mongodb');

var { User } = require('../ModelClass/user');
var { Todo } = require('../ModelClass/todo');

module.exports = router;

router.get('/user', (req, res) => {
  User.find().then((users) => {
    res.send({ users });
  }, (e) => {
    res.status(400).send(e);
  });
});

router.post('/post', (req, res) => {
  //console.log(req.body)
  var users = new User(req.body);
  users.save().then((doc) => {
    console.log('kuku');
    res.send(doc)
  }, (e) => {
    res.status(400).send(e);
  });
});

router.delete('/user/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
  }
  User.findByIdAndRemove(id).then((user) => {
    if (!user) {
      return res.status(404).send();
    }
    console.log(JSON.stringify(user, undefined, 2));
    res.send({ user });
  }).catch((e) => {
    res.status(400).send();
  });
});

router.get('/user/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(404).send();
    console.log('Wrong id BItach');
  }
  User.findById(id).then((user) => {
    if (!user) {
      console.log(`Ingen user med dette id ${id}`)
      return res.status(404).send();
    }
    res.send({ user })
  }).catch((e) => {
    res.status(400).send();
  });
});

router.put('/user/:id/todo/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(400).send();
  }
  User.findByIdAndUpdate(id,
    {
      $set:
      {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    }
  ).then((updateUser) => {
    if (!updateUser) {
      res.status(404).send();
      console.log('User doenst exist');
    }
    res.send({ updateUser })
  })
  Todo.findByIdAndUpdate(id,
    {
      $set:
      {
        task: req.body.task,
        difficulty: req.body.difficulty,
        importance: req.body.importance
      }
    }
  ).then((updateTodo) => {
    if (!updateTodo) {
      console.log("not found")
    }
    res.send({ updateTodo })
  })
});

router.put('/user/:id', (req, res) => {
  var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    res.status(400).send();
  }
  User.findByIdAndUpdate(id,
    {
      $set:
      {
        email: req.body.email,
        name: req.body.name,
        age: req.body.age
      }
    }
  ).then((updateUser) => {
    if (!updateUser) {
      res.status(404).send();
      console.log('User doenst exist');
    }
    res.send({ updateUser })
  })
});



