const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    cardholdername:{
        type: 'string',
        required: true,
    },
    cardnumber:{
        type: 'number',
        required: true,
    },
    amount: {
        type: 'number',
        required:true,
    },
    expdate: {
        type: Date,
        required: true,
    },
    userID: {
        type: String,
        required: true
    },


});

module.exports = mongoose.model("Payment", paymentSchema);
