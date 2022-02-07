require('./models/User');
require('./models/Investment');
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const investmentRoutes = require('./routes/investmentRoutes');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());
app.use(userRoutes);
app.use(investmentRoutes);

//UPDATE MONGO DB URI
const monogoUri = process.env.MONGO_URI;

mongoose.connect(monogoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.use(function (err, req, res, next) {
  if (!err) return next();
  console.log('error!!!', err);
  res.send('error!!!', err);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
