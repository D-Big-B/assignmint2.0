const mongoose = require("mongoose");
const Quote = require("./Quote");

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  });

module.exports = {
  Quote,
};
