const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const toDoController = require('./controllers/toDoController');

// makes .env variables available on process.env.____
dotenv.config();

const app = express();
const PORT = 3000;
// const PORT = proceses.env.PORT;

app.use(cookieParser());
app.use(bodyParser.json());

// app.get('/', toDoController.example, (req, res) => res.status(200).send(res.locals.data));

app.use(express.static(path.resolve(__dirname, "../")));

// ERROR HANDLER!
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Sorry, something went wrong!');
});

app.listen(PORT, () => console.log(`demo listening on port ${PORT}`));
