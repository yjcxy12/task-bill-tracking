import React, { useState, useCallback } from 'react';
import { func } from 'prop-types';
import dayjs from 'dayjs';
import Fields from './Fields';

// Can improve with form library + validation etc
const AddForm = ({ onSubmit: onSubmitProp }) => {
  const [payment, setPayment] = useState({
    name: '',
    amount: 0,
    startDate: dayjs(),
    frequency: 'weekly',
  });

  const onChange = useCallback(
    (newPayment) => {
      setPayment(newPayment);
    },
    [setPayment]
  );
  const onSubmit = useCallback(() => {
    if (onSubmitProp) onSubmitProp(payment);
  }, [payment, onSubmitProp]);

  const canSubmit =
    payment.name && payment.amount && payment.startDate && payment.frequency;

  return (
    <form>
      <Fields payment={payment} onChange={onChange} />

      <button type="button" onClick={onSubmit} disabled={!canSubmit}>
        Add new payment
      </button>
    </form>
  );
};

AddForm.propTypes = {
  onSubmit: func,
};

AddForm.defaultProps = {
  onSubmit: undefined,
};

export default AddForm;
