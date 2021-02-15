const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const toDoController = require('./controllers/toDoController');
const userController = require('./controllers/UserController');

// makes .env variables available on process.env.____
dotenv.config();

const DB_URL = 'mongodb://codesmith:ilovetesting1@ds040167.mlab.com:40167/cs26_demo';
const app = express();
const PORT = 3000;
// const PORT = proceses.env.PORT;

// Mongoose connection
mongoose.connect(
  DB_URL,
  { useNewUrlParser: true },
  err => {
    if (err) throw new Error(err);
  }
);
mongoose.connection.once('open', () => {
  console.log('DB Connection Established');
});

app.use(cookieParser());
app.use(bodyParser.json());

// app.get('/', toDoController.example, (req, res) => res.status(200).send(res.locals.data));

// next 6 lines are for database user actions
const userRouter = express.Router();
userRouter.get('/:name', userController.getUser, (req, res) => {
  res.send(res.locals.user);
});
userRouter.post('/', userController.setUser, (req, res) => {
  res.send(res.locals.user);
});
userRouter.patch('/:name', userController.updateUser, (req, res) => {
  res.send(res.locals.user);
});
userRouter.delete('/:name', userController.deleteUser, (req, res) => {
  res.send(res.locals.user);
});
app.use('/auth', userRouter);

app.use(express.static(path.resolve(__dirname, '../')));

// ERROR HANDLER!
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Sorry, something went wrong!');
});

app.listen(PORT, () => console.log(`demo listening on port ${PORT}`));
