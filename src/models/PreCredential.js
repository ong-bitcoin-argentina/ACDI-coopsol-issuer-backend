const mongoose = require('mongoose');

const { Schema } = mongoose;

const precredentialSchema = new Schema({
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Template",
    required: true
  },
  data: {
    type: {},
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject",
    required: true
  },
  /* Can emit boolean */

}, {timestamps: true});



const PreCredential = mongoose.model('PreCredential', precredentialSchema);
module.exports = PreCredential;