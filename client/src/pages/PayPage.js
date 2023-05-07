import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./PayPage.css";
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
          
          axios.post("http://localhost:5000/payment/add", newPayment).then(() => {
            alert("Payment Successfully...");
            
              //To clear the form after submission
              cardholdername.current.value = "";
              cardnumber.current.value = "";
              expdate.current.value = "";
              cvv.current.value = "";
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
                  <input type="text" placeholder="Binuja Nawod"  onChange={(e) => setCardHolderName(e.target.value)} required />
                </div>
                <div class="input-box">
                  <label class="details">Card Number</label>
                  <input type="number" placeholder="15xx-xxxx-xxxx-xxxx" maxlength="12" minlength="12" onChange={(e) => setCardNumber(e.target.value)} required />	  
                </div>
                <div class="input-box">
                  <label class="details">Expire date</label>
                  <input type="date"  placeholder="01/05"  onChange={(e) => setExpiry(e.target.value)} required />
                </div>
                <div class="input-box">
                  <label class="details">Cvv</label>
                  <input type="number" placeholder="xxx" maxlength="3" minlength="3" onChange={(e) => setCvv(e.target.value)} required />
                </div><br/>

              </div>
              <center><Button onClick={sentData}>Process to checkout</Button></center>
          </form>
      </div>
		</div>

  </div>

  );
}
