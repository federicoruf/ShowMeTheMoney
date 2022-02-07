const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {
  getInvestments,
  updateInvestments,
} = require('../controllers/investmentController');
const { INVESTMENT_DATA } = require('../data');
const Investment = mongoose.model('Investment');

router.get('/investments', async (req, res) => {
  const investments = await getInvestments();
  res.send(investments);
});

router.put('/investments', async (req, res) => {
  const {
    body: { updates },
  } = req;
  const response = await updateInvestments(updates);
  res.status(200).send('acciones y bonos actualizados');
});

router.get('/create-investments', async (req, res) => {
  try {
    await Investment.remove({});
    for (const investment of INVESTMENT_DATA) {
      const newTnvestment = new Investment(investment);
      await newTnvestment.save();
    }
  } catch (err) {
    console.log(
      'Error al intentar actualizar las inversiones del usuario',
      err
    );
  }
  res.send('finish');
});

module.exports = router;
