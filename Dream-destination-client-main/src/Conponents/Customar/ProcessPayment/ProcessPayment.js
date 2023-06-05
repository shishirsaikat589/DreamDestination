import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
import Payment from './Payment';

const stripePromise = loadStripe('pk_test_51IgwTyDPAtbBMkabalQTGp6P3cGbX0Lc0cwdooJmyYa3kZnPtqoBQBanJQJI5iGzO9Z45S2LGJilHrVCi9voqEDP00PJr5eMU5');

const ProcessPayment = () => {
  return (
    <div>
      
      <Elements stripe={stripePromise}>
      <div className="mt-5" >
        <h4 className="mb-5 text-center" >Please complete Payment for confirm your Booking</h4>
      </div>
        <Payment></Payment>
      </Elements>
    </div>



  );
};

export default ProcessPayment;