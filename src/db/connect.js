require('dotenv').config()
const mongoose = require("mongoose");

const connectionString = process.env.MONGO_URI;
console.log(`connectionString: `,connectionString)

module.exports = () => mongoose.connect(connectionString);
