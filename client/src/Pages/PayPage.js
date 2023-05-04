import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Box, Input, Button, VStack, Flex } from "@chakra-ui/react";


const PayPage = () => {

    const [cardholdername, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [amount, setAmount] = useState("");
  
    // const handleSubmit = (event) => {
    //   event.preventDefault();
    //   // send payment details to the server for processing
    // };
  
  
  const onhandleSubmit = async (event) => {
    event.preventDefault();

    const data = await savePayment({
      cardholdername: cardholdername.current.value,
      cardNumber: cardNumber.current.value,
      expiry: expiry.current.value,
      cvv: cvv.current.value,
      amount: amount.current.value,
    });

    //To clear the form after submission
    cardholdername.current.value = "";
    cardNumber.current.value = "";
    expiry.current.value = "";
    cvv.current.value = "";
    amount.current.value = "";
  };

return (
    <Box mt="60px" onSubmit={(e) => onhandleSubmit(e)}>
    <Flex gap={6} alignItems={"center"} direction={"column"} w="40%" m="auto">
    <div className="row">
        <div className="col-md-4 mb-3">
        <label for="validationname">Card Holdername</label>
            <Input
                value={cardholdername}
                placeholder="cardholdername"
                required
                onChange={(e) => setCardHolderName(e.target.value)}
            ></Input>
        </div>
        <div className="col-md-4 mb-3">
        <label for="validationnumber">Card Number</label>
            <Input
                value={cardNumber}
                placeholder="cardNumber"
                required
                onChange={(e) => setCardNumber(e.target.value)}
            ></Input>
        </div>
        <div className="col-md-4 mb-3">
        <label for="amount">Bill Ammount</label>
            <Input
                value={amount}
                placeholder="Rs:0.00"
                required
                onChange={(e) => setAmount(e.target.value)}
            ></Input>
        </div>
        <div className="col-md-4 mb-3">
        <label for="validationdate">Expire Date</label>
            <Input
                type={"date"}
                value={expiry}
                placeholder="expiry"
                required
                onChange={(e) => setExpiry(e.target.value)}
            ></Input>
        </div>
        <div className="col-md-4 mb-3">
        <label for="validationcvv">Cvv No</label>
            <Input
                value={cvv}
                placeholder="cvv"
                minLength="3"
                maxLength="3"
                required
                onChange={(e) => setCvv(e.target.value)}
            ></Input>
        </div>
    </div>

      <Button type="submit">Pay</Button>
    </Flex>
  </Box>
  );
};

export default PayPage;
