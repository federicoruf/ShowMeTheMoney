const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUser = async (name, next) => {
  const [userAccount] = await User.find({ name });
  return userAccount;
};
