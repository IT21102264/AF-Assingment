import React from 'react'
import React, { useState } from "react";

const payment = () => {

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // send payment details to the server for processing
  };

  return (
<form onSubmit={handleSubmit}>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        type="text"
        id="cardNumber"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />

      <label htmlFor="expiry">Expiry Date</label>
      <input
        type="text"
        id="expiry"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
        required
      />

      <label htmlFor="cvv">CVV</label>
      <input
        type="text"
        id="cvv"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        required
      />

      <label htmlFor="name">Cardholder Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default payment;



