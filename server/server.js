var express = require('express');
var bodyParser = require('body-parser');

var {
  mongoose
} = require('./db/mongoose');

var {
  Todo
} = require('./models/todo');
var {
  User
} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});





let port = 3000;

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {
  app
};
