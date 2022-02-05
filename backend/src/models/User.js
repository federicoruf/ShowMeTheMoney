const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  savings: {
    type: Number,
    required: true,
  },
  investments: [
    {
      name: {
        type: String,
        required: true,
      },
      units: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
