const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {
  getUser,
  updateUserInvestments,
  deleteUserInvestment,
} = require('../controllers/userController');
const { USERS_DATA } = require('../data');
const User = mongoose.model('User');

router.get('/user/:name', async (req, res, next) => {
  const {
    params: { name },
  } = req;
  const user = await getUser(name, next);
  res.send(user);
});

router.put('/:userId/invest/:name', async (req, res) => {
  const {
    params: { name, userId },
    body: { type, amount, savings },
  } = req;
  try {
    const user = await updateUserInvestments(
      userId,
      name,
      type,
      amount,
      savings
    );
    res.send(user);
  } catch (err) {
    console.log(
      'Error al intentar actualizar las inversiones del usuario',
      err
    );
  }
});

router.delete('/:userId/invest/:name', async (req, res) => {
  const {
    params: { name, userId },
  } = req;
  try {
    const user = await deleteUserInvestment(userId, name);
    res.send(user);
  } catch (err) {
    console.log(
      'Error al intentar actualizar las inversiones del usuario',
      err
    );
  }
});

//to create testing data
router.get('/create-users', async (req, res) => {
  await User.remove({});
  try {
    for (const user of USERS_DATA) {
      const newUser = new User(user);
      await newUser.save();
    }
  } catch (err) {
    console.log('Error al intentar actualizar los usuarios', err);
  }
  res.send('finish');
});

module.exports = router;
