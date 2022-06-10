const mongoose = require('mongoose');

const { Schema } = mongoose;

const subjectSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  cuit: {
    type: String,
    trim: true,
  },
  phoneNumber: String,
  did: {
    type: String,
    required: false,
    trim: true,
  },
}, { timestamps: true });



const Subject = mongoose.model('Subject', subjectSchema);
module.exports = Subject;