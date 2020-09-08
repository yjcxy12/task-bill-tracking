import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import AddPaymentForm from '../components/payment/AddPaymentForm';
import { addPayment } from '../service';

const paymentDateToStr = (payment) => ({
  ...payment,
  startDate: payment.startDate.format('YYYY-MM-DD'),
});

const Add = () => {
  const history = useHistory();

  const onSubmit = useCallback(
    (payment) => {
      // Optimistic UI opportunity with Redux?
      const apiCall = async () => {
        try {
          await addPayment(paymentDateToStr(payment));
          history.push('/');
        } catch (err) {
          console.error(`addPayment error: ${err}`);
        }
      };
      apiCall();
    },
    [history]
  );

  return (
    <div>
      <h1>Add A Bill</h1>
      <h2>Enter your details</h2>
      <p>Keep track of your household spending by adding your bills</p>
      <AddPaymentForm onSubmit={onSubmit} />
    </div>
  );
};

export default Add;
