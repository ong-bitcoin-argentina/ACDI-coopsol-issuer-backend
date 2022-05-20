const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitySchema = new Schema({
  executionDateTime: {
    type: Date,
    default: Date.now,
  },
  user: String,
  level: {
    type:String,
    default: "INFO"
  }, //ERROR, INFO,
  message: String,
  metadata: {}, //Podemos guardar el id de la credencial por ejemplo

}, { timestamps: true });



const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;