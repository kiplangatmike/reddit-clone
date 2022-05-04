const mongoose = require("mongoose");

const MONGODB_URL = process.env.MONGODB_URL;
module.exports = () => {
  return mongoose.connect(MONGODB_URL)
    .then(() => console.log("database is connected"))
  .catch((err) => {
    console.log(err);
  }
  );
};
//new