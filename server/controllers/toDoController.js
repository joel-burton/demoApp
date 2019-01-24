const toDo = {};

toDo.example = (req, res, next) => {
  console.log('in toDo Controller!');

  // do work, make a database call, etc.

  // recieved data from db
  res.locals.data = 'Im some data from the database';

  next();
};

module.exports = toDo;
