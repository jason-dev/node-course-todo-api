const {
  ObjectID
} = require('mongodb');

const {
  mongooose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({
//   _id: ObjectId("5c572b1afc381800649b2c9f")
// }).then((todo) => {
//   console.log(todo);
// });

Todo.findByIdAndRemove('5c572b1afc381800649b2c9f').then((todo) => {
  console.log(todo);
});
