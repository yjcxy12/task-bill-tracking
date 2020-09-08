import React from 'react';
import dayjs from 'dayjs';
import { func } from 'prop-types';
import paymentShape from './shapes';

const PaymentItem = ({ payment }) => {
  const nextPaymentDate = dayjs(payment.startDate).format('YYYY-MM-DD');

  return (
    <li>
      <div>
        <span>{payment.name}</span>
        <span>£{payment.amount}</span>
      </div>
      <div>
        <span>{payment.frequency}</span>
        <span>Next: {nextPaymentDate}</span>
      </div>
    </li>
  );
};

PaymentItem.propTypes = {
  payment: paymentShape.isRequired,
  onClick: func,
  onKeyDown: func,
};

PaymentItem.defaultProps = {
  onClick: undefined,
  onKeyDown: undefined,
};

export default PaymentItem;
