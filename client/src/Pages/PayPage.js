import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Box, Input, Button, VStack, Flex } from "@chakra-ui/react";


export default function PayPage() {

    const [cardholdername, setCardHolderName] = useState("");
    const [cardnumber, setCardNumber] = useState("");
    const [expdate, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
  
    const sentData = async (event) => {
        event.preventDefault();

        let newPayment = {
            cardholdername: cardholdername,
            cardnumber: cardnumber,
            expdate: expdate,
            cvv: cvv,
          }
          
          axios.post("http://localhost:5000/payment/add", newPayment).then(() => {
            alert("Sent data");
          }).catch(err => {
            console.log(err);
            alert("Failed to register. Please try again later.");
          })
      };

return (
    <Box mt="60px">
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
                value={cardnumber}
                placeholder="cardNumber"
                required
                onChange={(e) => setCardNumber(e.target.value)}
            ></Input>
        </div>
        <div className="col-md-4 mb-3">
        <label for="validationdate">Expire Date</label>
            <Input
                type={"date"}
                value={expdate}
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
     <Button onClick={sentData}>PayNow</Button>
    </Flex>
  </Box>
  );
}
