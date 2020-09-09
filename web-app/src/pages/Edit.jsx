import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { useHistory, useParams } from 'react-router-dom';
import EditForm from '../components/paymentForm/EditForm';
import { getPayment, updatePayment, deletePayment } from '../service';
import { paymentStrToDate, paymentDateToStr } from '../utils';

const Edit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  const [payment, setPayment] = useState({
    name: '',
    amount: 0,
    startDate: dayjs(),
    frequency: 'weekly',
  });
  const [originalName, setOriginalName] = useState('');

  // We want to call API to get latest information on Payment in case multiple logins for same account across different devices.
  // If requirement is set with client side, we can retrieve Payment from redux store and save a request to server.
  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await getPayment(id);
        setPayment(response);
        setOriginalName(response.name);
      } catch (err) {
        console.error(`getPayments error: ${err}`);
      }
    };
    apiCall();
  }, [id, dispatch]);

  const onSave = useCallback(
    (newPayment) => {
      // Optimistic UI opportunity with Redux?
      const apiCall = async () => {
        try {
          await updatePayment(id, paymentDateToStr(newPayment));
          history.push('/');
        } catch (err) {
          console.error(`updatePayment error: ${err}`);
        }
      };
      apiCall();
    },
    [id, history]
  );

  // Ideally we want to add confirmation before calling API
  const onDelete = useCallback(() => {
    // Optimistic UI opportunity with Redux?
    const apiCall = async () => {
      try {
        await deletePayment(id);
        history.push('/');
      } catch (err) {
        console.error(`deletePayment error: ${err}`);
      }
    };
    apiCall();
  }, [id, history]);

  return (
    <div>
      <h1>Edit A Bill</h1>
      <h2>{originalName}</h2>
      <p>
        If you&apos;d like to edit your bill you can change the details below
      </p>
      <EditForm
        payment={paymentStrToDate(payment)}
        setPayment={setPayment}
        onSave={onSave}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Edit;
