const mongoose = require('mongoose');

const { Schema } = mongoose;

const templateSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  fields: {
    type: [{
      name: String,
      description: String,
      dataType: String,
      required: Boolean
    }],
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  }



}, { timestamps: true });



const Template = mongoose.model('Template', templateSchema);
module.exports = Template;