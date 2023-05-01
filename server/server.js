const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

//Creating an express app
const app = express();

// Get port number and database URI from environment variables
const PORT = process.env.PORT;
const URI = process.env.URI;

// Connect to MongoDB database and start server
mongoose
  .connect(URI, { useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to MongoDB successful");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
