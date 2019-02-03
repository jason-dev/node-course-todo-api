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

// var id = '5c56772516a34b30281c8dc311';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));


let id = '5c56648368ab2304277c20c611';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user, undefined, 2));

}, (e) => {
  console.log(e);
});
