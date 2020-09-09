import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ListItem from '../components/paymentList/ListItem';
import { getPayments } from '../service';
import { setPayments } from '../state/payments';
import { paymentStrToDate } from '../utils';
import './Home.css';

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
    <div data-testid="home" className="home-container">
      <h1 data-testid="home-title" className="home-title">
        Regular Payments
      </h1>
      <div classNme="home-list-container">
        <ul className="home-list">
          {payments.map((payment) => (
            <Link
              className="home-list-item__link"
              key={payment.id}
              to={`/edit/${payment.id}`}
            >
              <ListItem payment={paymentStrToDate(payment)} />
            </Link>
          ))}
        </ul>
        <Link to="/add">
          <button className="home-add-bill-button" type="button">
            Add a bill
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
