const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUser = async (name, next) => {
  const [userAccount] = await User.find({ name });
  if (!userAccount) {
    const error = new Error('No se encontró al usuario');
    error.statusCode = 500;
    next(error);
  }
  return userAccount;
};

exports.updateUserInvestments = async (userId, name, type, amount, savings) => {
  const result = await User.findById({ _id: userId });
  const index = result.investments.findIndex((item) => item.name === name);
  if (index === -1) {
    result.investments.push({ name, type, units: amount });
  } else {
    result.investments[index].units = amount;
  }
  result.savings = savings;
  const final = await result.save();
  return final;
};

exports.deleteUserInvestment = async (userId, name) => {
  const result = await User.findOne({ _id: userId });
  const newInvestments = result.investments.filter(
    (asset) => asset.name !== name
  );
  result.investments = newInvestments;
  const final = await result.save();
  return final;
};
