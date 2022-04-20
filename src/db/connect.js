require('dotenv').config()
const mongoose = require("mongoose");
const connectionString = process.env.MONGO_URI;

module.exports = () => mongoose.connect(connectionString);
