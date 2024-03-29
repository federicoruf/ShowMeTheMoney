const mongoose = require('mongoose');

const investmentSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Investment', investmentSchema);
