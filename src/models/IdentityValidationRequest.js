const mongoose = require('mongoose');

const { Schema } = mongoose;

const identityValidationSchema = new Schema({
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
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  nationality: {
    type: String,
    trim: true,
  },
  status: {
    type: String, /* Usar enum, "", "ACCEPTED","REJECTED", default: null sino""*/
    trim: true,
  },
  phoneNumber: String,
  did: {
    type: String,
    required: false,
    trim: true,
  },
}, { timestamps: true });



const IdentityValidationRequest = mongoose.model('IdentityValidationRequest', identityValidationSchema);
module.exports = IdentityValidationRequest;