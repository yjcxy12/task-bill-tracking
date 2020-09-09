import React, { useCallback } from 'react';
import { func } from 'prop-types';
import Fields from './Fields';
import paymentShape from '../paymentList/shapes';

const EditForm = ({ payment, setPayment, onSave: onSaveProp, onDelete }) => {
  const onChange = useCallback(
    (newPayment) => {
      setPayment(newPayment);
    },
    [setPayment]
  );
  const onSave = useCallback(() => {
    onSaveProp(payment);
  }, [payment, onSaveProp]);

  const canSave =
    payment.name && payment.amount && payment.startDate && payment.frequency;

  return (
    <form>
      <Fields payment={payment} onChange={onChange} />

      <button type="button" onClick={onSave} disabled={!canSave}>
        Save
      </button>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </form>
  );
};

EditForm.propTypes = {
  payment: paymentShape.isRequired,
  setPayment: func,
  onSave: func,
  onDelete: func,
};

EditForm.defaultProps = {
  setPayment: () => {},
  onSave: undefined,
  onDelete: undefined,
};

export default EditForm;
