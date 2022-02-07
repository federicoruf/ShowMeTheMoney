const mongoose = require('mongoose');
const Investment = mongoose.model('Investment');

exports.getInvestments = async () => {
  const investments = await Investment.find();
  return investments;
};

exports.updateInvestments = async (updates) => {
  return Promise.all(
    updates.map(async (invest) => {
      try {
        const [investment] = await Investment.find({ name: invest.name });
        investment.unitPrice = invest.unitPrice;
        return await investment.save();
      } catch (error) {
        console.log('error al actualizer', error);
      }
    })
  );
};
