const mongoose = require('mongoose');
//require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://"+process.env.DB_USERNAME+":"+process.env.DB_PASSWORD+"@"+process.env.DB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;