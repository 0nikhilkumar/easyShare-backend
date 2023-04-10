const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "inShare",
    })
    .then((c) => {
      console.log(`Database is connected with ${c.connection.name}`);
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connectDB;



