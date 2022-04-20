const mongoose = require('mongoose');
const { validateEmail } = require('./utils');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    /* validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'] */
  },
  passwordHash: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false,
  }

}, {timestamps: true});



const User = mongoose.model('User', userSchema);
module.exports = User;