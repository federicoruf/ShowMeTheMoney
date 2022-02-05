const mongoose = require('mongoose');
const Investment = mongoose.model('Investment');

exports.getInvestments = async () => {
  const investments = await Investment.find();
  return investments;
};
