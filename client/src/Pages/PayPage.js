import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./PayPage.css";
import { Box, Input, Button, VStack, Flex } from "@chakra-ui/react";
import Header from '../components/Header';


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
          
          axios.post("http://localhost:4000/payment/add", newPayment).then(() => {
            alert("Sent data");
          }).catch(err => {
            console.log(err);
            alert("Failed to register. Please try again later.");
          })
      };

return (
  <div>
    <Header />
    <div class="container">
    <center><div class="title">Bill Payment Form</div></center>
    <hr></hr>
      <div class="content">
            <form action="adver.php" method="post">
              <div class="user-details">
                <div class="input-box">
                  <label class="details">Card Holder Name</label>
                  <input type="text" placeholder="Enter Card Holder name"  onChange={(e) => setCardHolderName(e.target.value)} required />
                </div>
                <div class="input-box">
                  <label class="details">Card Number</label>
                  <input type="number" placeholder="Enter card number"  onChange={(e) => setCardNumber(e.target.value)} required />	  
                </div>
                <div class="input-box">
                  <label class="details">Expire date</label>
                  <input type="date"  placeholder="Enter Exp date"  onChange={(e) => setExpiry(e.target.value)} required />
                </div>
                <div class="input-box">
                  <label class="details">Cvv</label>
                  <input type="number" placeholder="Enter cvv no"  onChange={(e) => setCvv(e.target.value)} required />
                </div><br/>

              </div>
              <center><Button onClick={sentData}>Process to checkout</Button></center>
          </form>
      </div>
		</div>

  </div>

  );
}
