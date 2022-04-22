const mongoose = require('mongoose');

const { Schema } = mongoose;

const credentialSchema = new Schema({
  did: {
    type: String,
    required: false, /* Solo si se emite */
    default: "did:ethr:0x0000000000000000000000000000000000000000"
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  data: {
    type: {},
    required: true,
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template"
  },
  status: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REVOKED"],
    default: 'PENDING'
  },
  statusHistory: []

  /* IssuanceDate? */



}, { timestamps: true });



const Credential = mongoose.model('Credential', credentialSchema);
module.exports = Credential;

