import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51Ie19CCEuUqhRYSEhkjRZzdNK3Y0VlxJYGeZ3I0qUNaqu1QOsENxVl7LXAUUnxJw52fcmfsmzU8HF4ZN07mNdd3200xljGqaYu"
);
const options = {
  mode: "payment",
  currency: "usd",
  amount: 1099,
};

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm handlePayment={handlePayment}></CheckoutForm>
    </Elements>
  );
};

export default ProcessPayment;
