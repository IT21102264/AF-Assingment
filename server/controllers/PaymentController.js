// Importing the Payment model
const Payment = require("../models/Payment");

// This function retrieves all payments from the database
const getAllPayment = async (req, res) => {
    await Payment.find()
      .then((payment) => {
        res.json(payment);
      })
      .catch((err) => {
        res.send(err.message);
      });
  };

// This function retrieves payments by id from the database
  const getPaymentById = async (req, res) => {
    await Payment.findById(req.params.id)
      .then((payment) => {
        res.json(payment);
      })
      .catch((err) => {
        res.send(err.message);
      });
  };


// This function creates a new payment and saves it to the database
const createPayment = async (req, res) => {
    const cardholdername = req.body.cardholdername;
    const cardnumber = Number(req.body.cardnumber);
    const expdate = Date.parse(req.body.expdate);
    const cvv = Number(req.body.cvv);

    const newPayment = new Payment({cardholdername, cardnumber, expdate, cvv });

    newPayment.save().then(() => {
      res.json("Added payment to database");
    }).catch((err) => {
      console.log(err);
    })
};



// This function updates a payment
const updatePayment = async (req, res) => {
    let paymentID = req.params.id;
    const  { cardholdername,cardnumber,expdate } = req.body;

  // Creating an object to update the payment
  const updatePayment = {
    cardholdername,
    cardnumber,
    expdate,
  };

  // Finding and updating the payment object in the database
  const update = await Payment.findOneAndUpdate(
    { _id: paymentID },
    updatePayment,
    { new: true }
  )
    .then(() => {
      res.status(200).json(update);
    })
    .catch((err) => {
      res.status(500).send({ status: "Error updating data" });
    });
};

// This function deletes a payment from the database
const deletePayment = async (req, res) => {
  const { paymentID } = req.body;

  // Finding and deleting the payment object from the database
  await Payment.findByIdAndDelete(paymentID)
    .then(() => {
      res.status(200).send({ status: "Payment Deleted" });
    })
    .catch((err) => {
      res.status(500).send({ status: "Error...." });
    });
};



// Exporting the functions to be used in other modules
module.exports = {
  createPayment,
  getAllPayment,
  getPaymentById,
  updatePayment,
  deletePayment,
};
