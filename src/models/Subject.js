const mongoose = require('mongoose');

const { Schema } = mongoose;

/* Esquema que representa a un productor apicola. 
  Se le dio el nombre de subject por ser el sujeto de la credencial 
  https://www.w3.org/TR/vc-data-model/
*/
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
  nationality: {
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