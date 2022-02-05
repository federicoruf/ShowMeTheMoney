const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { getInvestments } = require('../controllers/investmentController');
const { INVESTMENT_DATA } = require('../data');
const Investment = mongoose.model('Investment');

router.get('/investments', async (req, res) => {
  const investments = await getInvestments();
  res.send(investments);
});

router.get('/create-investments', async (req, res) => {
  for (const investment of INVESTMENT_DATA) {
    await Investment.create(investment);
  }
  res.send('finish');
});

module.exports = router;
