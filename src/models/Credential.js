const mongoose = require('mongoose');

const { Schema } = mongoose;

const credentialSchema = new Schema({
  did: {
    type: String,
    required: true
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  precredential: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PreCredential"
  },
  status: [], //enum? vigente o revocada?
  statusHistory: []

  /* IssuanceDate? */



}, {timestamps: true});



const Credential = mongoose.model('Credential', credentialSchema);
module.exports = Credential;