import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PaymentItem from '../components/payment/PaymentItem';
import { getPayments } from '../service';
import { setPayments } from '../state/payments';

const Home = () => {
  const dispatch = useDispatch();
  const payments = useSelector((state) => state.payments);

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await getPayments();
        dispatch(setPayments(response));
      } catch (err) {
        console.error(`getPayments error: ${err}`);
      }
    };
    apiCall();
  }, [dispatch]);

  return (
    <div>
      <h1>Regular Payments</h1>
      <ul>
        {payments.map((payment) => (
          <Link to={`/edit/${payment.id}`}>
            <PaymentItem key={payment.id} payment={payment} />
          </Link>
        ))}
      </ul>
      <Link to="/add">
        <button type="button">Add a bill</button>
      </Link>
    </div>
  );
};

export default Home;
