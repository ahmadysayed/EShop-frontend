import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
    clientId: "test",
    currency: "USD",
    intent: "capture",
  };
  

function CheckoutPay() {
  return (
    <PayPalScriptProvider options={initialOptions}>
          <PayPalButtons />
    </PayPalScriptProvider>
  )
}

export default CheckoutPay
