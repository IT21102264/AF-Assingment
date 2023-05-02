const router = require("express").Router(); // Importing the Router class from the Express package

const {
  createPayment,
  getAllPayment,
  getPaymentById,
  deletePayment,
  updatePayment,
} = require("../controller/PaymentController"); // Importing the controller functions from '../controller/paymentController'

//create a new payment
router.post("/add", createPayment); // Handles POST requests to create a new payment using the createPayment() function

//get all payments
router.get("/", getAllPayment); // Handles GET requests to get all payments using the getAllPayment() function

//get all payments
router.get("/:id", getPaymentById); // Handles GET requests to get a payments by id using the getPaymentById() function

//update all payments
router.put("/update/", updatePayment); // Handles PUT requests to update payments using the updatePayment() function

//delete a payment
router.delete("/delete/", deletePayment); // Handles DELETE requests to delete a payment using the deletePayment() function


module.exports = router; // Exports the router instance for use in the app.
