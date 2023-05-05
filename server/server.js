const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const { userRouter } = require("./routes/UserRoutes");
const paymentRouter = require("./routes/payment");
const { userValidator } = require("./middleware/uservalidator");
const { authenticator } = require("./middleware/authenticator");
const { userLogger } = require("./middleware/userLogger");
const { roleValidator } = require("./middleware/roleValidator");
require("dotenv").config();

//Creating an express app
const app = express();

// Get port number and database URI from environment variables
const PORT = process.env.PORT;
const URI = process.env.URI;

app.use(express.json());
app.use(userValidator);
app.use(authenticator);
app.use(userLogger);
app.use("/user", roleValidator);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/payment", paymentRouter);

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
