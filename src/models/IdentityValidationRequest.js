const mongoose = require('mongoose');
const { Schema } = mongoose;

const validationStatus = {
  "IN_PROGRESS": "IN_PROGRESS",
  "ACCEPTED": "ACCEPTED",
  "REJECTED": "REJECTED",
}

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
    type: String,
    enum: Object.keys(validationStatus),
    default: "IN_PROGRESS"
  },
  rejectionCause: {
    type: String,
  },
  rejectionObservation: {
    type: String,
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
IdentityValidationRequest.validationStatus = validationStatus;