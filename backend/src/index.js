require('./models/User');
require('./models/Investment');
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
const monogoUri =
  'mongodb+srv://admin:password12345@cluster0.88ugq.mongodb.net/showMeTheMoney';

mongoose.connect(monogoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.error('Error connecting to mongo', err);
});

app.use(function (err, req, res, next) {
  if (!err) return next();
  console.log('error!!!');
  res.send('error!!!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
