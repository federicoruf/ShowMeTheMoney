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

router.put('/:userId/remove-invest/:name', async (req, res) => {
  const {
    params: { userId, name },
    body: { savings },
  } = req;
  try {
    const user = await deleteUserInvestment(userId, name, savings);
    res.send(user);
  } catch (err) {
    console.log(
      'Error al intentar actualizar las inversiones del usuario',
      err
    );
  }
});

module.exports = router;
